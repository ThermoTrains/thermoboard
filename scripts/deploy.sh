#!/bin/bash
set -ex # exit when command fails; print each line executed

cp -R api/ dist/api/

cd dist/

# remove .gitignore, we want to deploy everything
find . -type f -name ".gitignore" -delete

git init
git add -A
git commit -m "deploy"
git remote add origin https://$GIT_USERNAME:$GIT_PASSWORD@thermoboard.sebastianhaeni.ch/plesk-git/thermoboard.git
git push --force origin master
