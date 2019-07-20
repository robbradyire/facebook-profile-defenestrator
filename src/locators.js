const { css } = require('selenium-webdriver/lib/by').By;

module.exports = {
  emailInput: css('input[type="email"]'),
  passwordInput: css('input[type="password"]'),
  submitButton: css('input[type="submit"]'),
  profileButton: css('a[title="Profile"]'),
};
