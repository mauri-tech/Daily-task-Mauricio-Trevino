# 🗓 Daily work scheduler
This is a simple daily planner application built using JavaScript, jQuery and Moment.js. 
The application displays the current day and time at the top of the page and allows the user to input and save events for each hour of the day. The planner also color codes each hour block to indicate whether the hour has passed, is current or is yet to come.

## Table of contents

* [Features](#features)
* [How to use](#how-to-use)
* [Code Structure](#code-structure)
* [Tools used](#tools-used)
* [Author](#author)
* [Github Repository](https://github.com/mauri-tech)
* [Screenshots](#screenshots)

## Features
* Displays the current day and time at the top of the page using the Moment.js library
* Allows the user to input and save events for each hour of the day
* Uses the jQuery library to dynamically update the page
* Color codes each hour block to indicate whether the hour has passed, is current or is yet to come
* Local storage is used to save the events even after the page is refreshed


## How to use
* Open the application in a web browser
* The current day and time will be displayed at the top of the page
* You can input events for each hour of the day by clicking on the text area and typing in your event
* To save the event, click on the save button next to the text area
* The events will be saved in local storage and will persist even after the page is refreshed
* The hour blocks will be color coded to indicate whether the hour has passed, is current or is yet to come


## Code Structure
The code is structured into three main functions:

* colorChange() function - This function iterates over the elements with class "input" and assigns the class 'past','present' or 'future' based on the comparison between the current time and the schedule time.
* renderText() function - This function is responsible for displaying the events saved in local storage when the page is loaded.
* saveBtn button functionality - When user click on the save button, it will take the text entered by user and time from the html and save the text entered by user in local storage.

## Tools used
JavaScript
jQuery
Moment.js
Bootstrap

## Author
This application was developed by Mauricio Trevino as a project for Web Developer Bootcamp.

## Github 
[Github](https://github.com/mauri-tech)
[Github-Repo](https://github.com/mauri-tech/Daily-task-Mauricio-Trevino)



## Screenshots
[Screenshot #1](/Assets/Captura%20de%20Pantalla%202023-01-11%20a%20la(s)%2016.22.31.png)