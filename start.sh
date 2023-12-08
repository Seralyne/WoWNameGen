#!/bin/bash


echo 'Checking for presence of WoW Name Generator data'
if ! [[ -e web/csvData/nameGen.csv ]]; then 
    echo "WoW Name Generator data isn't present, downloading... (Thanks Wago <3)"
    curlResult=$(curl -s -S -o web/csvData/nameGen.csv https://wago.tools/db2/NameGen/csv) | tr -s '\n' 
    # Getting the latest version
    echo "$curlResult"
else
    echo 'Name Generator Data is present, skipping.';
fi

npm install
node index.js