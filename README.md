# SVG-Logo-Maker

## User Story 
As a freelance web developer, I want to generate a simple logo for my projects, so that I dont have to pay a graphic designer.

## Description
This is a command-line application, which will generated a logo svg file. This app will prompt the user for text (up to 3 characters long), a text colour and a background colour for the logo. All colour must be a css named value or in hex code. The user can choose from circle, triangle or square as the shape of the logo.

## Installation 
In the root directory you want to run "npm i" to install all the required packages.

## Usage 
User can type "npm start" or "node index.js" to start the user prompt in the root directory.

The user must pass all the requirements of making the svg logo, otherwise it will prompt a corresponding error message.

Upon finishing all the questions, a svg file will be generated called logo.svg in the dist folder.

This project uses the npm inquirer, is-css3-color and jest for testing.

## License
MIT license

## Contribution 
N/A
