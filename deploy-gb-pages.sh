#!/bin/bash

## Script for automating deployment of source code into Heroku

export APPNAME=reactive-chat-front
export OUTPUT_PATH="/docs"

# get the latest version
git checkout master
git pull origin master

# push a new tag
export newVersion=`npm version patch`
git push origin $newVersion

# Packages source code
git checkout gb-pages-release
git pull --rebase origin master
npm test
npm build
docker build -t $APPNAME:latest .

# commits changes to release branch
git add .
git commit -m "Release version $newVersion"
git push origin gb-pages-release

# Cleans
git checkout master
