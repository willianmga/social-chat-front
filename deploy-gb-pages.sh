#!/bin/bash

## Script for automating deployment of app to github pages

export APPNAME=reactive-chat-front

# get the latest version
git checkout master
git pull origin master

# Tests the project
# npm test

# push a new tag
export newVersion=`npm version patch`
git push origin $newVersion

# Packages source code
git checkout gb-pages-release
git pull --rebase origin master
npm build
docker build -t $APPNAME:latest .

# commits changes to release branch
git add .
git commit -m "Release version $newVersion"
git push origin gb-pages-release

# Cleans
git checkout master
