![img_1.png](server/assets/img_1.png)


# Event Manager 2.0

### Ideas to realize for V2

### DevOps:

- [ ] NX monorepo
- [ ] CI for tests
- [ ] Deployment:
-  events-manager.devthomas.pl/api - BackEnd
-  events-manager.devthomas.pl - FrontEnd
-  events-manager.storybook.devthoms.pl - Storybook 
-  events-manager.test-coverage-fe.devthomas.pl - Test Coverage FrontEnd
-  events-manager.test-coverage-be.devthomas.pl - Test Covarage  BackEnd 
- DB on CleverCloud at first // or Heroku
- [ ] CD for deployment
- [ ] Deployment on AWS EC2
- [ ] CD for AWS deployment

### Backend:

- [ ] Backend NestJS + TypeORM + GraphQL
- [ ] Backend Login + QR code
- [ ] Testing with SuperTests 100% coverage
- [ ] Prepare Swagger
- [ ] Publish
- [ ] Testing in Postman
- [ ] Morpheus + Grafana monitoring on Docker container

 ###  Frontend:

- [ ] MSW
- [ ] Cypress
- [ ] Login
- [ ] Storybook with addons
- [ ] Publish static storybook on events-manager.storybook.devthomas.pl
- [ ] MaterialUI DataGrid
- [ ] Dark Mode MUI
- [ ] Mobile responsive
- [ ] Toasts
- [ ] Map Location

 ### Mobile:

- [ ] React Native
- [ ] Mobile tests in Detox

------

### App URL

- FrontEnd: https://events-manager.devthomas.pl
- Backend: https://events-manager-api-cd.herokuapp.com/api

Storybook and Test Coverage are available on:
https://fremen1990.github.io/events_manager


### Heroku deployment CI/CD

Heroku debugging:
```ts
heroku login
heroku run bash -a APPNAME
$ cd app
exit
```
