const { WebElementCondition } = require('selenium-webdriver');
const findElementThatMatches = require('./findElementThatMatches');
const untilElementsWithin = require('./untilElementsWithin');
const locators = require('./locators');

const forDisableChatTabs = new WebElementCondition(
  'for disable chat tabs setting to appear',
  driver =>
    findElementThatMatches(driver, locators.chatSettingEntry, text =>
      /turn off chat tabs/iu.test(text)
    )
);

const disableChatWindows = async driver => {
  const chatBox = await driver.findElement(locators.chatBox);
  await chatBox.click();
  await driver
    .wait(untilElementsWithin(chatBox, locators.chatSettings, true))
    .click();
  return driver.wait(forDisableChatTabs).click();
};

module.exports = disableChatWindows;
