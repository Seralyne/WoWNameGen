# WoWNameGen
Made out of frustration that the in-game World of Warcraft random name generator isn't available on EU, I figured I might as well create a tool that uses the same data that works standalone.


## Dependencies & Installation

Because of security limitations in browsers, this project will have to rely on [Node.js] (https://nodejs.org/en) for any local version of this. In all honesty, any local file server will do the trick, this is just a newbie-ish friendly method. I don't like relying on this, but it is what it is.

It's generally pretty bad form to include dependencies in your repository, so I don't. I have, however, included a script for both Linux (Bash! Sorry fish users!) and Windows that will download the project. The Linux install script *should* also work on macOS, but remains untested.

On Linux, this assumes you've got cURL (most distros ship this by default), on Windows, this assumes you've got PowerShell (which you should have).

On Linux, you should also run `chmod+x start.sh` to make the scripts executable.

## Uninstallation

Just delete the folder this is contained in - this entire program is portable - it just doesn't ship with its dependencies.

If you don't need Node.js for anything else - feel free to uninstall it afterwards.

## Running the tool
Run the start script for your operating system. This will start a local web server and open the name generator in your default browser.

On Windows, this would be `start.ps1`.

On Linux, this would be `start.sh`.


# Web Version
This project is made as a simple web app and can run on anyone's computer. I do not currently have hosting available.
