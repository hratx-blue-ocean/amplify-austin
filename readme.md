# Amplify Austin
<p align="left">
  <img width="200" height="200" src=./amplify_austin.png>
</p>

## Table of Contents
- [Amplify Austin](#amplify-austin)
  - [Table of Contents](#table-of-contents)
  - [Demo](#demo)
  - [Contributors](#contributors)
  - [About](#about)
  - [What does the app do?](#what-does-the-app-do)
  - [Technologies](#technologies)
  - [SetUp and Requirements](#setup-and-requirements)
  - [Scripts](#scripts)
  - [How to Use?](#how-to-use)

## Demo
![GIF OF DEMO](https://thumbs.gfycat.com/FamiliarAdvancedConey-size_restricted.gif)

## Contributors
* [Cameron Sobhani](http://github.com/Cameron-Sobhani)
* [Ethan Hogan](http://github.com/ethanhogan)
* [Evan Schweitzer](http://github.com/Xenolithes)
* [James Jamail](http://github.com/jamesjamail)
* [Jonathan Keane](https://github.com/jkeane889)
* [Seth Lewis](https://github.com/projectlewis)
* [Taylor George](http://github.com/atgeorge11)
* [Tye Macon](https://github.com/tyemacon)
* [Chris Scarlett](https://gargoylepastures.com)

## About
Amplify Austin is a web application that prioritizes mobile phone users.

This application was built during a brief 1-week sprint to be submitted to [Open Austin](https://www.open-austin.org/) as the baseline for a potential open source project. With that being said, this app is early in development but has all basic functionality in place. 

Amplify Austin facilitates civic engagement by providing a platform through which its residents and 
their city officials can easily interact to solve concerns important to Austin. 

We enable users to raise awareness of community issues in need of address to the city officials 
responsible for addressing them. City officials can use our application to gauge issues of 
importance to residents. We also provide a venue for community members to organize and promote 
events in the Austin area.

## What does the app do?
Users can create an account which allows them to create their own posts and watch posts that they are interested in keeping track of. 

Users can view the posts that they have created as well as the ones that they are watching from the corresponding pages.

Posts can be sorted by date or popularity and filtered by category based on user inputs. 

There is a map feature which allows all users to see where local issues or events are located. The pins on the map can be visited to view the corresponding post details. 

Visiting each post gives more details about it as well as displaying the exact location of it on a map. Issues can be resolved if a user feels like the issue has been taken care of, as well as disputed, if a user sees a post that is resolved but feels the issue has not been handled. Users can also reach out to the pertinent city department relevant to the category that the issue was tagged with by the creator of the post.

There is also full user authentication implemented with the usual sign in, sign out and sign up functionality.

    
## Technologies
#### Front End
* React
* React Router
* Material-UI
#### Back End
* MySQL
* Express
* Node.js
* AWS RDS
#### Additional Technologies
* Docker
* Travis CI
* Google Maps API
* AWS EC2
## Setup and Requirements
* MySQL/RDS Database
* Google Maps API Key with Geolocation, Geocoding, and JavaScript Map API enabled
* Add environmental variable for Google Maps API key to `.env` file in root directory **and** client directory
* Add environmental variable for RDS password to `.env` file in root directory
## Scripts
#### Development
1. `npm run setup` in root directory (installs all dependencies in all folders)
1. `npm run start` in server directory (starts up the server listening on port 8000)
1. `npm run start` in client directory (starts up live-server)
#### Production
1. `npm run deploy` in root directory
