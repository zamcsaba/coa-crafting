# CoA Crafting Helper

## Description

The purpose of this application is to save time for players of City Of Arabel. Crafting is quite a time-consuming task.
Some players can afford that, some cannot. This is made for the latter, they also should have a chance to participate in 
crafting items despite they cannot spend too much time on that, so they will probably have more time for roleplaying activities.

**Disclaimer:** This application will not share information for metagaming, it will only use data already available on the forums, 
players will need to fill in their own knowledge available in-game and only they will be able to access it.   
The developer of this application will not hold any responsibility about the information entered, the results and suggestions, or anything in connection with this application.  
    
This project is licensed under [GPL v3](https://www.gnu.org/licenses/gpl-3.0.en.html).

## Installation
The project can be run on either Linux, Windows, or Mac.  
Prerequisites:
 - NodeJS (v12 or newer)
 - NPM
 - *for development: TypeScript (`npm install --global typescript eslint`) - on linux you'll probably run this with `sudo`*

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

You will be able to access the application at `http://localhost:3000` or on any other port if you change the default.

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```