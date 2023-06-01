# Settings

Example of iOS style setting management using React Native and Expo. Settings are managed using Redux-Toolkit and stored using Redux-Persist. The App also supports Dark Mode.

<p float="left" align="middle">
  <img src="assets/screenshots/1.png" width="32%">
  <img src="assets/screenshots/2.png" width="32%">
  <img src="assets/screenshots/3.png" width="32%">
</p>

<p float="left" align="middle">
  <img src="assets/screenshots/4.png" width="32%">
  <img src="assets/screenshots/5.png" width="32%">
  <img src="assets/screenshots/6.png" width="32%">
</p>

Screenshots were made using Screenshots Pro (https://screenshots.pro/).

Alternatives to create mockups / app store screenshots and videos:

- Rotato (https://rotato.app): create 3d mockups (also has a Figma flugin). Free version has watermark.
- Figma: nice tool with loads of plugins for creating mockups. Free version is very limited though: no video support and not possible to export elements to library.
- Angle plugin for Figma (https://www.figma.com/community/plugin/778645840235495725/Angle-Mockups): free library of mockups / shapes, but customizing them works best with the paid version of Figma (Professional).
- Vectary 3D Elements plugin for Figma (https://www.figma.com/community/plugin/769588393361258724/Vectary-3D-Elements): loads of interesting 3D shapes
- Sketch

Here is an example of an app video made using Rotato, exported in ProRes4444 2K and then 'shared' using iMovie as a Low Quality File in 540P 60 resolution and Compress set to Better Quality:

https://github.com/jbijlsma/react-native-settings/assets/535436/563b40bc-18ae-424f-83f5-4258890e3209

Note: to upload a video in Github just drag it in the README.md file when editing on github.com (max 10 MB upload for free account).

I also tried creating mockups using Sketch, the Angle 4 Library (free) and the Sketch Mockup Plugin:

<p float="left" align="middle">
  <img src="assets/screenshots/sketch/S21_PLus_Real-Phantom Black-Left.png" width="48%">
  <img src="assets/screenshots/sketch/Note_20_Ultra_Real-Mystic Green-Right .png" height="500">
</p>

This was more work than expected:

- In Android Studio Virtual Device Manager (VDM) I created 2 new virtual devices using the "New Hardware Profile" option; one for the Samsung S21+ and one for the Samsung Galaxy Note 20 Ultra. I made sure to specify the correct screen sizes by looking them up online.
- Without hiding the physical bottom button bar in the emulator it will appear in screenshots which is not what you want. For the physical bottom button bar to disappear I had to select API version 33. Nothing I tried hid the buttons in version 31.
- I used the Mockup plugin ( https://github.com/ruslanlatypov/Mockup-Plugin-for-Sketch) instead of the Angle plugin in Sketch because the Angle plugin does not support the latest version of Sketch. This is suggested in the README when you download the free Angle 4 Mockups.
- Installing the plugin simply means copying the plugin code to the Plugins folder. You can get the location of the Plugins folder by going to Settings->Plugins and choosing "Reveal Plugin Folder" at the bottom near ...
- Unlike the instructions the plugin does not require rosetta to work.
- What is important is that you use the "Detach from Symbol" option in Sketch after adding a Symbol from the Angle 4 Library. Without doing this the screen layer that you select from the Ssymbol will not be picked up when you run the Mockup plugin.
- You need to add Artboard elements to the page for the screenshots / videos that you want to show within the mockups. If an Artboard of a device is not available you simply have to find the dimensions of the real device and adjust the dimensions of another Artboard.
- Finally you just record in the correct Android emulator, make screenshots, import them into Sketch and make sure they allign with the Artboard. Then you use the Mockup plugin to rotate the Artboards onto the mockup screens. You can export the Mockups directly from Sketch using the "Export" option on the Design tab.
