FROM node:8.1.2

ENV HOME /home

RUN apt-get update -y \
    && apt-get upgrade -y \
    && apt-get install -y vim vim-gnome wget

RUN mkdir -p /var/www/js
WORKDIR /var/www/js
