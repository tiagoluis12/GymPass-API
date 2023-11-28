# App

GymPass style app.

## RFs (Functional requirements)

- [] It must be possible to register;
- [] It must be possible to authenticate;
- [] It must be possible to obtain the profile of a logged-in user;
- [] It must be possible to obtain the number of check-ins performed by the logged-in user;
- [] It must be possible for the user to obtain their check-in history;
- [] It must be possible for the user to search for nearby gyms (up to 10km);
- [] It must be possible for the user to search for gyms by name;
- [] It must be possible for the user to check-in at a gym;
- [] It must be possible to validate a user's check-in;
- [] It must be possible to register a gym;

## RNs (Business Rules)

- [] The user must not be able to register with a duplicate email;
- [] The user cannot do 2 check-ins on the same day;
- [] The user cannot check in if they are not close (100m) to the gym;
- [] Check-in can only be validated up to 20 minutes after being created;
- [] Check-in can only be validated by administrators;
- [] The gym can only be registered by administrators;

## RNFs (Non-Functional Requirements)

- [] The user's password must be encrypted;
- [] Application data must be persisted in a PostgreSQL database;
- [] All data lists must be paged with 20 items per page;
- [] The user must be identified by a JWT (JSON Web Token);

## Running locally
# Clone this repository
$ git clone https://github.com/tiagoluis12/project-03-solid
# Access the project folder in your terminal
$ cd project-03-solid
# Install the dependencies
$ npm i
# Run the docker
$ docker compose up -d
# Run the application in development mode
$ npm run dev
# The application will runing on port 3333, so you can access the url http://localhost:3333/ to do the requests.
# Run the unit tests
$ npm run test
# Run the E2E tests
$ npm run test:e2e
# Run the tests and get a relatory
$ npm run test:coverage
# Run the tests and open a interface to see better
$ npm run test:ui
