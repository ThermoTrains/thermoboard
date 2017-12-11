#!/bin/bash

while read file;
do
  name="${file#dist/}";
  curl -u "$FTP_USER:$FTP_PASSWORD" --ftp-create-dirs -T "$file" ftp://sebastianhaeni.ch/"$name";
done < <( find dist -type f )
