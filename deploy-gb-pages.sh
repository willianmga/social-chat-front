#!/bin/bash

## Script for automating deployment of app to github pages

export APP_NAME="reactive-chat-front"
export BASE_HREF="/${APP_NAME}/"

# get the latest version
git checkout master
git pull origin master

# Tests the project
# ng test || { echo "Tests failed."; exit 1; };

# push a new tag
export newVersion=`npm version patch`

# Packages source code
git checkout gb-pages-release
git pull --rebase origin master
ng build --prod
docker build -t $APPNAME:latest .

# commits changes to release branch
git add .
git commit -m "Release version $newVersion"
git push origin gb-pages-release --force

# Cleans
git checkout master
git push origin $newVersion
