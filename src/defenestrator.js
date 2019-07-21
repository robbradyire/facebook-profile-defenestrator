const { until } = require('selenium-webdriver');
const buildDriver = require('./driver');
const locators = require('./locators');
const { email, password } = require('./secrets');
const clearLikes = require('./profileSections/likes');

const run = async limit => {
  const driver = await buildDriver();
  await driver.get('https://www.facebook.com');
  await driver.findElement(locators.emailInput).sendKeys(email);
  await driver.findElement(locators.passwordInput).sendKeys(password);
  await driver.findElement(locators.submitButton).click();

  const profileUrl = await driver
    .wait(until.elementLocated(locators.profileButton))
    .getAttribute('href');

  await clearLikes(driver, profileUrl, limit);

  // Seemingly a bug when deleting reviews, parking this until fixed
  // await deleteReviews(driver, profileUrl, limit);

  await driver.quit();
};

module.exports = run;
