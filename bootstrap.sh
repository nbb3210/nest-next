#!/usr/bin/env bash

source /etc/profile && nvm use 10.15.0 &&  echo 'node version is' && node -v

npm i -g yarn --registry=http://bnpm.byted.org

yarn start:prod