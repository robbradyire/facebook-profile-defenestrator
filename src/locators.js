const { css } = require('selenium-webdriver/lib/by').By;

module.exports = {
  emailInput: css('input[type="email"]'),
  likedButton: css('button.PageLikedButton'),
  likePopoverItem: css('[role="menuitem"]'),
  loader: css('.async_saving'),
  passwordInput: css('input[type="password"]'),
  profileButton: css('a[title="Profile"]'),
  submitButton: css('input[type="submit"]'),
};
