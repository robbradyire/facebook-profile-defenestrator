const buildDriver = require('./driver');
const locators = require('./locators');
const { email, password } = require('./secrets');

const run = async () => {
  const driver = buildDriver();
  await driver.get('https://www.facebook.com');
  await driver.findElement(locators.emailInput).sendKeys(email);
  await driver.findElement(locators.passwordInput).sendKeys(password);
  await driver.findElement(locators.submitButton).click();
  await driver.quit();
};

module.exports = run;
