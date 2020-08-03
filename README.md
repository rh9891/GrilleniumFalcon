# Grillenium Falcon

[![NPM Version Badge](https://badge.fury.io/js/%40angular%2Fcore.svg)](https://badge.fury.io/js/%40angular%2Fcore)

## Table of Contents
*  [Description](#description)
*  [Contributors](#contributors)
*  [User Story](#user-story)
*  [Features of the Application](#features-of-the-application)
*  [Preview of the Grillenium Falcon](#preview-of-the-grillenium-falcon)
*  [Links](#links)
*  [Installation](#installation)
*  [Usage](#usage)
*  [License](#license)
*  [Contributing](#contributing)
*  [Questions](#questions)

## Description

Home Page gives the user the opportunity to Make Reservation, see current reservations as well as the waiting list
Clicking on Make Reservation will provide a form in bootstrap that the user can complete.
If there are less than 5 current table reservations, then that reservation is added to the reservation list.
If there are more than 5 current table reservations, then that reservation is added to the waitlist.
The user can click on View Tables to see the current list of reservations and waitlists.
At the bottom of the app, there are three links.
First link is to Clear Table which will empty out the arrays and basically reset the reservation list.
The second link is to the API Table Link which shows the raw data objects for the table array.
The third link is to the API Wait List which shows the raw data objects for the Waitlist Array.Welcome to the Grillenium Falcon, Overall purpose is to help schedule reservation requests. Restaurant has just 5 tables available. First five requests get a reservation, every request after that is sent to the waiting list.

The Grillenium Falcon is a full-stack application that was built using Node, Express (to handle the routing), and jQuery.

## Contributors

1. [Romie Hecdivert](https://github.com/rh9891)

2. [Andrew Kleiner](https://github.com/akleiner26)

3. [Alex Reichard](https://github.com/alreichard)

4. [Christopher Turton](https://github.com/Turtando)

## User Story
~~~
  
~~~

## Features of the Application
~~~
  
~~~

## Preview of the Grillenium Falcon

![Grillenium Falcon Homepage]()

The following animation demonstrates the complete application functionality:

![Grillenium Falcon Preview]()

## Links

1. [Deployed Application](https://grillenium-falcon.herokuapp.com)

2. [Github Repository](https://github.com/rh9891/GrilleniumFalcon)

## Installation

The application requires the following dependencies and/or package managers:
~~~
$ npm install body-parser
~~~

~~~
$ npm install express
~~~

The following dependency - though optional - can also be used as it automatically restarts the node application when file changes in the directory are detected. Saving it as a `devDependency` allows the user to run the application using Nodemon:
~~~
$ npm install nodemon --save-dev
~~~

## Usage

The application can be initiated by inserting `node server.js` into the command line interface and running the application on `localhost: 2187`.

An example of usage when testing the application using Nodemon as it updates the webpage after every change it detects:
~~~
$ npm run dev
~~~

## License

This application does not currently have any licenses.

The user is not permitted to use, modify, or share any parts of it. Though the code for this application is hosted on Github, where you are allowed to view and fork the code, this does not imply that the user is permitted to use, modify, or share the contents of this application for any purpose.

## Contributing

If you would like to contribute to this repository, please contact me via [Github](https://github.com/rh9891).

## Questions

If you have any questions, comments, or issues regarding this application, please do not hesitate to contact me through [Github](https://github.com/rh9891).