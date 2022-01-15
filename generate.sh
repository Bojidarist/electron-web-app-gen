#!/bin/sh
mkdir -p "apps/$1"
cd "apps/$1"
cp ../../main.js .
cp ../../package.json .
sed -i "s|your_proj_name|$1|" ./package.json
sed -i "s|YOUR_WEBSITE_HERE|$2|" ./main.js
npm install --save-dev electron
