const { WebElementCondition, until } = require('selenium-webdriver');
const buildDriver = require('./driver');
const locators = require('./locators');
const { email, password } = require('./secrets');
const getLoopLimiter = require('./limit');

const isUnlikeButton = text => /unlike/iu.test(text.trim());

const forUnlikeButton = new WebElementCondition(
  'for unlike button',
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

const clearLikes = async (driver, clearAll) => {
  const likedButtons = await driver.wait(
    until.elementsLocated(locators.likedButton)
  );
  const limiter = getLoopLimiter(clearAll);
  for (const button of likedButtons) {
    if (limiter.reachedLimit()) break;

    await button.click();
    await driver.wait(forUnlikeButton).click();
  }
};

const run = async clearAll => {
  const driver = buildDriver();
  await driver.get('https://www.facebook.com');
  await driver.findElement(locators.emailInput).sendKeys(email);
  await driver.findElement(locators.passwordInput).sendKeys(password);
  await driver.findElement(locators.submitButton).click();

  const profileUrl = await driver
    .wait(until.elementLocated(locators.profileButton))
    .getAttribute('href');
  await driver.get(`${profileUrl}/likes`);

  await clearLikes(driver, clearAll);

  await driver.quit();
};

module.exports = run;
