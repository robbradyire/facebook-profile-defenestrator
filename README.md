# facebook-profile-defenestrator

An attempt to automate wiping your Facebook profile. Still very much a WIP.

Requirements (this can no doubt be simplified a bit down the line):

- Node.js v12
- yarn
- Chrome & a compatible ChromeDriver version

I'm using Node through Vagrant to avoid messing with my local env too much
(there's) probably at least 3 smarter ways to do this) - to use it install
Vagrant then run `vagrant up`.

To run:

- Change the email/password in `secrets-example.js` and remove the `-example`
  from the filename
- yarn install
- yarn start
