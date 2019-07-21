const { css } = require('selenium-webdriver/lib/by').By;

module.exports = {
  // Init/login
  emailInput: css('input[type="email"]'),
  passwordInput: css('input[type="password"]'),
  profileButton: css('a[title="Profile"]'),
  chatBox: css('.fbChatTypeahead'),
  chatSettings: css('a[aria-label="Options"]'),
  chatSettingEntry: css('a[role="menuitemcheckbox"]'),

  // General
  popoverItem: css('[role="menuitem"]'),
  loader: css('.async_saving'),

  // Likes
  likedButton: css('button.PageLikedButton'),

  // Reviews
  submitButton: css('input[type="submit"]'),
  editDeleteButton: css('[aria-label="Edit/Delete"]'),
  contentUnavailableConfirm: css('[action="cancel"]'),
  closeDialogButton: css('div[role="dialog"] form button[type="submit"]'),

  // Groups
  hiddenEditButton: css('a[aria-label="Edit"]'),
  groupsSection: css('div[aria-labelledby="medley_header_groups"]'),
};
