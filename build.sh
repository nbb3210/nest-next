#!/bin/bash

# 切换node版本
source /etc/profile && nvm use 10.15.0 &&  echo 'node version is' && node -v

# 删除node_modules软链接
rm -rf node_modules

# 安装 yarn
npm i -g yarn --registry=http://bnpm.byted.org
# 安装依赖
yarn --registry=http://bnpm.byted.org

# 开始编译
yarn build