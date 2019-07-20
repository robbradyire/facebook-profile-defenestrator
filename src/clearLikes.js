const { WebElementCondition, until } = require('selenium-webdriver');
const locators = require('./locators');
const getLoopLimiter = require('./limit');

const isUnlikeButton = text => /unlike/iu.test(text.trim());

const forUnlikeButton = new WebElementCondition(
  'for unlike button to appear',
  async driver => {
    const menuItems = await driver.findElements(locators.menuItem);
    if (menuItems.length > 0) {
      const menuTexts = await Promise.all(
        menuItems.map(item => item.getText())
      );
      const index = menuTexts.findIndex(isUnlikeButton);
      if (index >= 0) {
        return menuItems[index];
      }
    }
    return false;
  }
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
