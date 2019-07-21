const { WebElementCondition, until } = require('selenium-webdriver');
const locators = require('./locators');
const getLoopLimiter = require('./limit');
const findElementThatMatches = require('./findElementThatMatches');

const forUnlikeButton = new WebElementCondition(
  'for unlike button to appear',
  driver =>
    findElementThatMatches(driver, locators.likePopoverItem, text =>
      /unlike/iu.test(text)
    )
);

const clearLikes = async (driver, limit) => {
  let likedButtons = [];
  const limiter = getLoopLimiter(limit);

  do {
    likedButtons = await driver.wait(
      until.elementsLocated(locators.likedButton)
    );
    for (const button of likedButtons) {
      if (limiter.reachedLimit()) {
        break;
      }
      await button.click();
      await driver.wait(forUnlikeButton).click();
      limiter.loop();
    }
  } while (likedButtons.length > 0 && !limiter.reachedLimit());

  console.log(`Unliked ${limiter.getCount()} pages.`);
};

module.exports = clearLikes;
