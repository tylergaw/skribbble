# Skribbble
A collection of Sketch plugins to retrieve Dribbble shots and info. It's using
a port of [Jribbble](https://github.com/tylergaw/jribbble) that works with
JSTalk and JSCocoa [Jribbble Cocoa](https://github.com/tylergaw/jribbble-cocoa)
to make requests to the [Dribbble API](https://dribbble.com/api).

## What Does It Do?
There are currently two plugins both that create a grid of Dribbble shots in Sketch.
"Player Shots Grid" creates a grid of shots from a given user. "Shots Grid" creates
a grid of shots from one of the available lists; Debuts, Everyone, or Popular.

![Screenshot of Skribbble options alert](http://f.cl.ly/items/212G171f1V0o3E1v3r0N/skribbble-screens.png)

Each has options for:

 - The shot size; Teaser or Full Size*
 - The number of columns and rows
 - The margin between each shot image

*Even though Dribbble allows uploads up to 800x600px the plugin restricts shots
to 400x300px to make sure a proper grid can be created.

## Installation
There are two different ways to install Skribbble. Official Sketch Plugin installation
documentation can be found in the [plugin docs](http://bohemiancoding.com/sketch/support/developer/01-introduction/01.html).

### Git clone (best way to go)
 - Using a command line app (Terminal, iTerm, etc) navigate to the Sketch Plugins
 directory. This is different depending on your set up. If you're unsure, open
 Sketch and go to the Plugins menu > Reveal Plugins Folder
 - Once you're in the Plugins directory `git clone git@github.com:tylergaw/skribbble.git` or your fork.
 - You can find the plugins in the Plugins Menu > skribbble

### Zip download
 - If you're reading this on GitHub, there should be a Download Zip button to the
 right of this text. Download the zip file.
 - Open your Sketch Plugins folder by going to the Plugins menu > Reveal Plugins Folder
 - Unzip the Skribbble zip file. Place the entire folder in the Sketch plugins folder
 - You can change the name of that folder to anything you want.
 - You can find the plugins in the Plugins Menu > skribbble (or the name you gave it)


## Sketch Requirements
You'll need the latest release of Sketch 3, version 3.0.2. It's in the App Store.
This version is needed because I'm making use of features that are available now
that they've switched from JSTalk to CocoaScript. Mainly the
[COSAlertWindow](https://github.com/ccgus/CocoaScript/tree/master/src/framework) class.

## Writing Your Own Plugins?
I used this as a way to learn more about writing Sketch Plugins. If you're doing
the same thing, cool! Best way to learn is by looking at other peoples' stuff,
that's what I did.

Most of the goods are located in [skribbble-utils.js](https://github.com/tylergaw/skribbble/blob/master/lib/skribbble-utils.js)
I tried to add comments to sections of the code that I thought may not be immediately clear.
