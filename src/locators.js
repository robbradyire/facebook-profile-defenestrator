const { css } = require('selenium-webdriver/lib/by').By;

module.exports = {
  emailInput: css('input[type="email"]'),
  likedButton: css('button.PageLikedButton'),
  loader: css('.async_saving'),
  menuItem: css('[role="menuitem"]'),
  passwordInput: css('input[type="password"]'),
  profileButton: css('a[title="Profile"]'),
  submitButton: css('input[type="submit"]'),
};
