FROM nginx:1.17.1-alpine

LABEL maintainer="willian.azevedo (willian-mga@hotmail.com)"

COPY docs/ /usr/share/nginx/html

EXPOSE 8080
