# facebook-profile-defenestrator

An attempt to automate wiping your Facebook profile. Still very much a WIP.

Requirements (this can no doubt be simplified a bit down the line):

- Node.js v12
- yarn
- Chrome & a compatible ChromeDriver version

To run:

- Set your Facebook language to English
- Change the email/password in `secrets-example.js` and remove the `-example`
  from the filename
- `yarn install`
- `yarn start`
- If you have 2fa enabled, confirm as usual and then leave the script to run
