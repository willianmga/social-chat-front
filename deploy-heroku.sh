#!/bin/bash

## Script for automating deployment of source code into Heroku

export APPNAME=reactive-chat-front
export OUTPUT_PATH="/docs"

# Packages source code

echo Building application
echo

mvn ng build --prod --output-path $OUTPUT_PATH

# Builds docker image

echo
echo Building docker image
echo

docker build -t $APPNAME:latest .

rm -rf $OUTPUT_PATH

# Deploys docker image to Heroku

export USERNAME="willian.bodnariuc@gmail.com"

heroku login --username $USERNAME
export TOKEN=$(heroku auth:token)

echo
echo Using Heroku Auth token $TOKEN
echo

docker login --username=$USERNAME --password=$TOKEN registry.heroku.com
docker tag $APPNAME:latest registry.heroku.com/$APPNAME/web
docker push registry.heroku.com/$APPNAME/web

heroku container:release web --app $APPNAME
