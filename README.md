
# Event Manager 2.0

### Ideas to realize for V2

DevOps:
- [ ] NX monorepo
- [ ] CI for tests
- [ ] Deployment on Vercel (api, web, mobile)
- [ ] CD for deployment
- [ ] Deployment on AWS EC2
- [ ] CD for AWS deployment

Backend:
- [ ] Backend NestJS + TypeORM + GraphQL
- [ ] Backend Login + QR code
- [ ] Testing with SuperTests 100% coverage
- [ ] Testing in Postman
- [ ] Morpheus + Grafana monitoring on Docker container 

Frontend:
- [ ] MSW
- [ ] Cypress
- [ ] Login
- [ ] Storybook
- [ ] MaterialUI DataGrid
- [ ] Dark Mode MUI
- [ ] Mobile responsive
- [ ] Toasts
- [ ] Map Location

Mobile:
- [ ] React Native
- [ ] Mobile tests in Detox

------

![img_1.png](server/assets/img_1.png)

# Events Manager - backend v1

### The project has been prepared in TDD (Test Driven Development) methodology. 

### This was my first project in which I used this methodology, so I had to learn a lot of new things.

### Challanges

- I had to learn how to configure JEST with TypeScript.
- I had to learn how to use the TDD methodology and get used to writing small chunks.
- I had to learn how to use Sequelize library - previously been using TypeORM.
- I had to check TypeScript details in a lot of cases, typescript is a very powerful tool, but it is also very easy to make a mistake.

---
### Main project goal was to save the event with following fields: 
- first name 
- second name 
- email 
- date 

### Finally it was too little and, there is CRUD functionality for all events.

---
### Installation:
- clone the repository `git clone git@github.com:Fremen1990/events_manager.git` (if you have not done it yet for Front-end)
- go to the server folder `cd server`
- run `yarn` in the root directory

### Run the project:
- run `yarn dev` to start the server
- run `yarn test` to run tests
- run `yarn test:coverage` to run tests with coverage


---
### TECHNOLOGIES:

### - JavaScript <img src="https://www.lightgalleryjs.com/images/logos/javascript.svg" width="25" />

### - TypeScript <img src="https://devthomas.pl/static/media/typescript.3de182d2.svg" width="25" />

### - NodeJS  <img src="https://devthomas.pl/static/media/nodejs.a1231528.svg" width="25" />

### - Express <img src="https://devthomas.pl/static/media/express.c6bab64b.svg" width="25" />

### - Sqlite  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Sqlite-square-icon.svg/256px-Sqlite-square-icon.svg.png" width="25" />

### - Sequelize <img src="https://images.opencollective.com/sequelize/5974b6b/logo/256.png" width="25" />



-----

### TESTING: 
Current test coverage is 89% (see below).

 <img src="https://miro.medium.com/max/1400/1*PoH0pTYeT1zmX06Ehbq1UA.jpeg" width="400" />

[//]: # (### Jest <img src="https://devthomas.pl/static/media/testing_jest.369f0112.webp" width="25" />)

[//]: # (### SuperTest <img src="https://github.com/Fremen1990/DevSocialMedia-backend/raw/develop/architecture/super+test.png" width="45" />)

----
## Application structure:

![img.png](server/assets/project_architecture.png)![](architecture/project-architectureTS.png)


-----


### Avaialabel endpoints:

- GET /api - Hi message

- GET /api/events/all - get all events

- GET /api/events/:id - get event by id
- POST /api/events - create new event
- PUT /events/:id - update event by id
- DELETE /events/:id - delete event by id

![img_8.png](server/assets/img_8.png)
![img_3.png](server/assets/img_3.png)
![img_4.png](server/assets/img_4.png)
![img_5.png](server/assets/img_5.png)
![img_6.png](server/assets/img_6.png)
![img_7.png](server/assets/img_7.png)

----

### Packages:

    "typescript": "^4.8.3",
    "ts-node": "^10.9.1",
    "ts-node-dev": "^2.0.0",
    "jest": "^29.0.3",
    "ts-jest": "^29.0.1",
    "supertest": "^6.2.4"
    "config": "^3.3.8",
    "cors": "^2.8.5",
    "cross-env": "^7.0.3",
    "express": "^4.18.1",
    "express-validator": "^6.14.2",
    "sequelize": "^6.21.6",
    "sqlite3": "^5.0.11",
    "uuid": "^9.0.0"


----

### Project currently in progress, future improvements:

- [x] Prepare README
- [x] Prepare App flow
- [x] Create CRUD for Events
- [x] Add validations
- [x] Add error handling
- [x] Add more tests
- [x] Testing coverage report


-----
-----
-----
-----
-----
-----



![img_1.png](client/assets/img_1.png)

# Events Manager - Front-End v1.0

### The project has been prepared in TDD (Test Driven Development) methodology.

### This was my first project in which I used this methodology, so I had to learn a lot of new things.


### Challanges:

- I had to learn how to use the TDD methodology and get used to writing small chunks without seeing it.
- I had to learn how to use React Testing Library with TypeScript.
- I had to find a way to test the components that use the Context API.

---
### Main project goal was to save the event with following fields:
- first name
- second name
- email
- date

### Finally, it was too little and there is CRUD functionality for all events with list of events.

![img.png](client/assets/img.png)

---
### Installation:
- clone the repository `git clone git@github.com:Fremen1990/events_manager.git`
  (if you have not done it yet for Back-end)
- go to the client folder `cd clinet`
- run `npm install` in the root directory

### Run the project:
- run `yarn start` to start the server
- run `yarn test` to run tests
- run `yarn run react-scripts test -- --coverage --watchAll=false` to run tests with coverage


---
### TECHNOLOGIES:

### - JavaScript <img src="https://www.lightgalleryjs.com/images/logos/javascript.svg" width="25" />

### - TypeScript <img src="https://devthomas.pl/static/media/typescript.3de182d2.svg" width="25" />

### - React  <img src="https://devthomas.pl/static/media/react.4009eef3.svg" width="25" />

### - Styled Components <img src="https://devthomas.pl/static/media/styled-components.9ceedb83.svg" width="25" />

### - Material UI  <img src="https://devthomas.pl/static/media/material-ui-1.82291019.svg" width="25" />


-----

### TESTING:
Current test coverage is 89%

### Cypress  <img src="https://symbols.getvecta.com/stencil_25/40_jest.5fde12ec22.png" width="45" />

### Cypress  <img src="https://devthomas.pl/static/media/testing_cypress.a9574ba6.png" width="45" /> - to be done in the future, currently learning 😊

----
## Application structure:

![img_1.png](client/assets/fe-project-architecture.png)

----

### Project currently in progress, future improvements:

- [x] Prepare README
- [x] Prepare App flow
- [x] Create CRUD for Events
- [x] Add validations
- [x] Add error handling
- [x] Add more tests
- [x] Testing coverage report
- [ ] Add Cypress Tests
