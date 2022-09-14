## Events Manager - backend v1

### The project has been prepared in TDD (Test Driven Development) methodology. 

### Main project feature is to save event with following fields: first name, second name, email and date (using date picker)


I have been using Kanban methodology to 
plan and track my work. 

[The Kanban Board HERE!](https://trello.com/b/Syhmbnkz/brainhub-eventapp)



### Project is a back-end api for the front-end application, main features are:

- **REGISTER** - create new user 
- **USER AUTHORIZATION** JWT - users are authorized using JSON Web Tokens
- **EDIT USER DETAILS** - CRUD for user details
- **CREATE EVENT** - create new event
- **EDIT EVENT** - edit event details
- **DELETE EVENT** - delete event
- **GET ALL EVENTS** - get all events

[//]: # (- **GET EVENT BY ID** - get event by id)

[//]: # (- **GET EVENTS BY USER ID** - get events by user id)

[//]: # (- **GET EVENTS BY DATE** - get events by date)

[//]: # (- **GET EVENTS BY EMAIL** - get events by email)

----

### TECHNOLOGIES:

### - JavaScript <img src="https://www.lightgalleryjs.com/images/logos/javascript.svg" width="25" />

### - TypeScript <img src="https://www.devthomas.pl/static/media/typescript.3de182d2.svg" width="25" />

### - NodeJS  <img src="https://www.devthomas.pl/static/media/nodejs.a1231528.svg" width="25" />

### - Express <img src="https://www.devthomas.pl/static/media/express.c6bab64b.svg" width="25" />

### - Sqlite  <img src="" width="25" />

### - Sequelize

### Swagger <img src="https://www.scottbrady91.com/img/logos/swagger-banner.png" width="50" />

### Docker <img src="https://uncommonsolutions.com/wp-content/uploads/2018/12/Microsoft-Docker-logo.png" width="50" />


-----

### TESTING: 

[//]: # (<img src="https://miro.medium.com/max/1400/1*PoH0pTYeT1zmX06Ehbq1UA.jpeg" width="400" />)

### Jest <img src="https://www.devthomas.pl/static/media/testing_jest.369f0112.webp" width="25" />

### SuperTest <img src="architecture/super+test.png" width="45" />

----

### Packages:

    "typescript": "^4.8.3"
    "config": "^3.3.8",
    "cross-env": "^7.0.3",
    "express": "^4.18.1",
    "nanoid": "^4.0.0",
    "sequelize": "^6.21.6",
    "sqlite3": "^5.0.11",
    "jest": "^29.0.3",
    "supertest": "^6.2.4",


[//]: # (## Data flow:)

[//]: # ()

[//]: # (![]&#40;architecture/data-flow.png&#41;)

----

## Application structure:

![](architecture/project-architectureTS.png)

### to be drawn in draw.io

## Folders structure:

![](architecture/folders-structureTS.png)
### to be drawn in draw.io

-----

### Project currently in progress, future improvements:

- [x] Prepare README
- [ ] Prepare catalogs structure
- [ ] Prepare App flow
- [ ] Create CRUD for Events
- [ ] Add validations
- [ ] Add error handling
- [ ] Add more tests
- [ ] Testing coverage report
- [ ] Add authentication
- [ ] Add authorization
- [ ] Add Swagger
