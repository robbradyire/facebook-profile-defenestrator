const { until } = require('selenium-webdriver');
const buildDriver = require('./driver');
const locators = require('./locators');
const { email, password } = require('./secrets');
const clearLikes = require('./profileSections/likes');
const leaveGroups = require('./profileSections/groups');

const run = async defaultLimit => {
  const driver = await buildDriver();
  await driver.get('https://www.facebook.com');
  await driver.findElement(locators.emailInput).sendKeys(email);
  await driver.findElement(locators.passwordInput).sendKeys(password);
  await driver.findElement(locators.submitButton).click();

  const profileUrl = await driver
    .wait(until.elementLocated(locators.profileButton))
    .getAttribute('href');

  await clearLikes(driver, profileUrl, defaultLimit);

  // Seemingly a bug when deleting reviews, parking this until fixed
  // await deleteReviews(driver, profileUrl, defaultLimit);

  await leaveGroups(driver, profileUrl, defaultLimit);

  await driver.quit();
};

module.exports = run;
