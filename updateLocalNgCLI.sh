# Update local Angular CLI to match the global version. 
# Must be in local directory of Angular project you want to update.

#!/bin/bash

sudo npm uninstall -g angular-cli
sudo npm cache clean
sudo npm install -g @angular/cli@latest

rm -rf node_modules
sudo npm uninstall --save-dev angular-cli
sudo npm install --save-dev @angular/cli@latest
sudo npm install
