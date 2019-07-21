const { WebElementCondition, until } = require('selenium-webdriver');
const locators = require('../locators');
const getLoopLimiter = require('../limit');
const findElementThatMatches = require('../findElementThatMatches');

const forDeleteButton = new WebElementCondition(
  'for delete button to appear',
  driver =>
    findElementThatMatches(driver, locators.popoverItem, text =>
      /delete/iu.test(text)
    )
);

const deleteReviews = async (driver, profileUrl, limit) => {
  let popoverButtons = [];
  const limiter = getLoopLimiter(limit);

  await driver.get(`${profileUrl}/reviews`);

  do {
    popoverButtons = await driver.wait(
      until.elementsLocated(locators.likedButton)
    );
    for (const button of popoverButtons) {
      if (limiter.reachedLimit()) break;

      await button.click();
      await driver.wait(forDeleteButton).click();
      const confirmButton = await driver.wait(
        until.elementLocated(locators.closeDialogButton)
      );
      await confirmButton.click();

      await driver.stalenessOf(confirmButton);

      limiter.loop();
    }
  } while (popoverButtons.length > 0 && !limiter.reachedLimit());

  console.log(`Deleted ${limiter.getCount()} reviews.`);
};

module.exports = deleteReviews;
