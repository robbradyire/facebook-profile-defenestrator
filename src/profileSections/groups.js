const { WebElementCondition, until } = require('selenium-webdriver');
const locators = require('../locators');
const getLoopLimiter = require('../limit');
const findElementThatMatches = require('../findElementThatMatches');
const untilElementsWithin = require('../untilElementsWithin');

const forLeaveButton = new WebElementCondition(
  'for leave group button to appear',
  driver =>
    findElementThatMatches(driver, locators.popoverItem, text =>
      /leave group/iu.test(text)
    )
);

const leaveGroups = async (driver, profileUrl, limit) => {
  let editButtons = [];
  const limiter = getLoopLimiter(limit);

  await driver.get(`${profileUrl}/groups`);

  const groupSection = await driver.wait(
    until.elementLocated(locators.groupsSection)
  );

  do {
    try {
      editButtons = await driver.wait(
        untilElementsWithin(groupSection, locators.hiddenEditButton),
        5000
      );
    } catch (error) {
      const count = limiter.getCount();
      console.log(count === 0 ? 'No groups found' : `Left ${count} groups.`);
      return;
    }
    for (const button of editButtons) {
      if (limiter.reachedLimit()) break;

      // These buttons aren't displayed until hovered over, a click does the job
      await button.click();
      await driver.wait(forLeaveButton).click();
      const confirmButton = await driver.wait(
        until.elementLocated(locators.closeDialogButton)
      );

      // Bypass dialog animation
      await driver.executeScript(element => element.click(), confirmButton);

      await driver.wait(until.stalenessOf(confirmButton));

      limiter.loop();
    }
  } while (editButtons.length > 0 && !limiter.reachedLimit());
};

module.exports = leaveGroups;
