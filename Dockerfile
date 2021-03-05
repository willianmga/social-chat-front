FROM httpd:2.4

LABEL maintainer="willian.azevedo (willian-mga@hotmail.com)"

COPY ./docs/ /usr/local/apache2/htdocs/

EXPOSE 8080
