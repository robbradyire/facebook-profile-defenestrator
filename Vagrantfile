# -*- mode: ruby -*-
# vi: set ft=ruby :

# Config version 2
Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/trusty64"

  # bootstrap.sh runs when spinning up a vm
  config.vm.provision :shell, path: "bootstrap.sh"

  config.vm.network :forwarded_port, guest: 3000, host: 5000, host_ip: "127.0.0.1"

  config.vm.provider "virtualbox" do |vm|
    vm.name = "cube"
    vm.memory = 2048
    vm.cpus = 2
  end

end
