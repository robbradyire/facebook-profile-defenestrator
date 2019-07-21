const { until } = require('selenium-webdriver');
const locators = require('./locators');
const { email, password } = require('../secrets');
const clearLikes = require('./profileSections/likes');
const leaveGroups = require('./profileSections/groups');

const run = async (driver, defaultLimit) => {
  await driver.get('https://www.facebook.com');
  await driver.findElement(locators.emailInput).sendKeys(email);
  await driver.findElement(locators.passwordInput).sendKeys(password);
  await driver.findElement(locators.submitButton).click();

  const profileUrl = await driver
    .wait(until.elementLocated(locators.profileButton))
    .getAttribute('href');

  // dis tricky af
  // await disableChatWindows(driver);

  await clearLikes(driver, profileUrl, defaultLimit);

  // Seemingly a bug when deleting reviews, parking this until fixed
  // await deleteReviews(driver, profileUrl, defaultLimit);

  await leaveGroups(driver, profileUrl, defaultLimit);
};

module.exports = run;
