echo 'Checking for presence of WoW Name Generator data'
if (-Not (Test-Path -Path ./web/csvData/nameGen.csv -PathType Leaf))  {
    echo "WoW Name Generator data isn't present, downloading... (Thanks Wago <3)"
    Invoke-WebRequest https://wago.tools/db2/NameGen/csv -OutFile ./web/csvData/nameGen.csv
    # Getting version 3.0.1 - the latest as of the writing of this tool.
} else {

    echo 'WoW Name Generator Data is present, skipping.';
}



npm install
node index.js