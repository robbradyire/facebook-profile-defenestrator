#!/usr/bin/env node

const buildDriver = require('./src/driver');
const defenestrator = require('./src/defenestrator');

// Clear to run for reals :scream: (todo: make a param)
// Only removes X entries per profile section when set
const sectionLimit = 2;

let driver;

const closeDriverSession = async () => {
  if (driver) {
    try {
      return await driver.quit();
    } catch (ignore) {
      // :shrugs:
    }
  }
  return Promise.resolve();
};

process.on('unhandledRejection', reason => {
  return closeDriverSession().then(() => {
    throw reason;
  });
});

buildDriver()
  .then(_driver => {
    driver = _driver;
    return defenestrator(driver, sectionLimit).catch(reason => {
      console.error(reason);
      process.exitCode = 1;
      throw reason;
    });
  })
  .finally(() => closeDriverSession());
