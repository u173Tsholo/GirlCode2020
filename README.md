# Daisy
Daisy is our Period Tracker facade application.

Many women and girls find themselves living full time with their abusers due to COVID19 and we understand that as a result, asking for help or calling the pollice which was possible before when faced with GBV might not always be possible.
As a result, we made a facade Period Tracker website because we understand "periods" is a topic many men shy away from.
At first glance, the app is a typical period tracker with a calendar and info pages, however when the user attempts to add their period, they are taken to the help site where they can call for help using an SOS button or chat service.

This application will deal with the user and an authoritative body like ours or other authoritative bodies we refer them to. We want to avoid situations where community members take matters into their own hands because case may tend to be distorted when police get involved

`Users can rate the intensity of the situation they are in or use the chat service to peak to one of our qualified help center personnel on matters such as: Is my partner abusing me even though he apologies when he hurts me?, What shelters are there for abused women near me during lockdown etc. We do not make use of a robot chat service as we deal more with human emotions.`

# Technologies Used
## Frontend
Angular 9 Framework. This is the code of the master branch for which you need to run 'npm install' then 'ng serve -o'to run the program
Please ensure you have the backend running at the same time in order to communicate with the database server

## Backend
NodeJS API using express and Sequelize Framework to communicate with the database. 
The code can be founf on the API branch and can be run using 'npm run dev' in development mode, else 'node app.js' will be enough

## Database
Postgres running on the Heroku server to allow simultaneous user access. Connection details are provided within the database.js file on the API branch
(We would save the connection details using git secrets on a normal day to avoid users with malicious intent however for this demo we are not abiding by this ruel)



## Angular Autogenerated Content
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
