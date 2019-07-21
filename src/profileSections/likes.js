const { WebElementCondition, until } = require('selenium-webdriver');
const locators = require('../locators');
const getLoopLimiter = require('../limit');
const findElementThatMatches = require('../findElementThatMatches');

const forUnlikeButton = new WebElementCondition(
  'for unlike button to appear',
  driver =>
    findElementThatMatches(driver, locators.popoverItem, text =>
      /unlike/iu.test(text)
    )
);

const clearLikes = async (driver, profileUrl, limit) => {
  let likedButtons = [];
  const limiter = getLoopLimiter(limit);

  await driver.get(`${profileUrl}/likes`);

  do {
    try {
      likedButtons = await driver.wait(
        until.elementsLocated(locators.likedButton),
        5000
      );
    } catch (error) {
      console.log('No likes found');
      return;
    }
    for (const button of likedButtons) {
      if (limiter.reachedLimit()) break;

      await button.click();
      await driver.wait(forUnlikeButton).click();
      limiter.loop();
    }
  } while (likedButtons.length > 0 && !limiter.reachedLimit());

  console.log(`Unliked ${limiter.getCount()} pages.`);
};

module.exports = clearLikes;
