const WebDriver = require('selenium-webdriver');
const { Options } = require('selenium-webdriver/chrome');

// Disable notification request popup, turn on incognito mode
const switches = ['disable-device-discovery-notifications', 'incognito'];

const options = new Options()
  .addArguments(...switches)
  .excludeSwitches('enable-automation');

const buildDriver = async () => {
  const driver = new WebDriver.Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();
  await driver
    .manage()
    .window()
    .maximize();
  return driver;
};

module.exports = buildDriver;
