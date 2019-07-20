#!/usr/bin/env bash

# Prevents debconf from trying to access stdin: https://serverfault.com/a/670688
export DEBIAN_FRONTEND=noninteractive

apt-get update
apt-get upgrade

curl -sL https://deb.nodesource.com/setup_12.x | bash -
curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

apt-get update
apt-get install -y git
apt-get install -y nodejs
apt-get install -y yarn
apt-get -y autoremove

cd /vagrant
yarn install
