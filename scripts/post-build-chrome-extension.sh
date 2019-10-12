#!/usr/bin/env bash

cd ./chrome-extension
rm -rf $(ls . | egrep -v manifest.json)
cd ../dist/line-way
cp -R * ../../chrome-extension/
