#!/bin/bash

## Script for automating deployment of source code into Heroku

export DOCKER_HUB_REPO="willianmga"
export APPNAME="reactive-chat-front"

export DOCKER_HUB_USERNAME="willianmga"
export USERNAME="willian.bodnariuc@gmail.com"

export RELEASE_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' \
  | tr -d '[[:space:]]')

# Packages source code

ng build --prod || { echo 'Failed to build project. Exiting.' ; exit 1; }

# Build, tag and push docker image

#docker login login --username=$DOCKER_HUB_USERNAME --password $DOCKER_HUB_TOKEN || { echo 'Failed to login to docker hub. Exiting.' ; exit 1; }

docker build -t $APPNAME:$RELEASE_VERSION -t $APPNAME:latest . || { echo 'Failed to build docker image. Exiting.' ; exit 1; }

docker tag $APPNAME:$RELEASE_VERSION $DOCKER_HUB_REPO/$APPNAME:$RELEASE_VERSION
docker tag $APPNAME:latest $DOCKER_HUB_REPO/$APPNAME:latest

docker push $DOCKER_HUB_REPO/$APPNAME:$RELEASE_VERSION
docker push $DOCKER_HUB_REPO/$APPNAME:latest

rm -rf $OUTPUT_PATH
