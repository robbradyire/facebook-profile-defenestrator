const WebDriver = require('selenium-webdriver');
const { Options } = require('selenium-webdriver/chrome');

const switches = ['incognito', 'disable-device-discovery-notifications'];

const options = new Options()
  .addArguments(...switches)
  .excludeSwitches('enable-automation');

const buildDriver = () =>
  new WebDriver.Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

module.exports = buildDriver;
