# WoWNameGen
Made out of frustration that the in-game World of Warcraft random name generator isn't available on EU, I figured I might as well create a tool that uses the same data that works standalone.


## Dependencies & Installation
It's generally pretty bad form to include dependencies in your repository, so I don't. I have, however, included a script for both Linux (Bash! Sorry fish users!) and Windows that will download the project. The Linux install script *should* also work on macOS, but remains untested.

On Linux, this assumes you've got cURL (most distros ship this by default), on Windows, this assumes you've got PowerShell (which you should have).

On Linux, you should also run `chmod+x install.sh` and `chmod+x run.sh` to make the scripts executable.

## Uninstallation

Just delete the folder this is contained in - this entire program is portable - it just doesn't ship with its dependencies.

## Running the tool

Once you've run your install script, you can choose to open the file in a web browser of your choice, but I've also provided a shell script that does that for you.

On Windows, this would be `run.ps1`.

On Linux, this would be `run.sh`.


# Web Version
This project is made as a simple web app and can run on anyone's computer. I do not currently have hosting available.