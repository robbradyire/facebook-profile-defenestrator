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
      const count = limiter.getCount();
      console.log(
        count === 0 ? 'No likes found' : `Unliked ${limiter.getCount()} pages.`
      );
      return;
    }
    for (const button of likedButtons) {
      if (limiter.reachedLimit()) break;

      await button.click();
      await driver.wait(forUnlikeButton).click();
      limiter.loop();
    }
  } while (likedButtons.length > 0 && !limiter.reachedLimit());
};

module.exports = clearLikes;
