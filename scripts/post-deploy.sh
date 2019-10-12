#!/usr/bin/env bash

cd ./deploy
rm -rf $(ls . | egrep -v '(.git|CNAME)')
cp -R ../dist/line-way/* ./
git add --all
git commit -m "deploy at $(date "+%D %R")"
git push origin gh-pages
