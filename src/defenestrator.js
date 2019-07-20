const { until } = require('selenium-webdriver');
const buildDriver = require('./driver');
const locators = require('./locators');
const { email, password } = require('./secrets');
const clearLikes = require('./clearLikes');

const run = async limit => {
  const driver = await buildDriver();
  await driver.get('https://www.facebook.com');
  await driver.findElement(locators.emailInput).sendKeys(email);
  await driver.findElement(locators.passwordInput).sendKeys(password);
  await driver.findElement(locators.submitButton).click();

  const profileUrl = await driver
    .wait(until.elementLocated(locators.profileButton))
    .getAttribute('href');
  await driver.get(`${profileUrl}/likes`);

  await clearLikes(driver, limit);

  await driver.quit();
};

module.exports = run;
