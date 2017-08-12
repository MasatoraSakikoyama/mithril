#!/bin/bash
docker create --name dotfiles -v /Users/sakikoyama/Workspace/dotfiles/:/home/ busybox

docker create --name mithril_data -v /Users/sakikoyama/Workspace/mithril/:/var/www/mithril busybox

docker build -t mithril ./
docker run --name mithril --volumes-from mithril_data --volumes-from dotfiles -it mithril /bin/bash
docker commit mithril mithril
