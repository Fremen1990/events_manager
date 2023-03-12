![img_1.png](server/assets/img_1.png)

# Event Manager 2.0

### Ideas to realize for V2

### PRIORITY: TESTS & TEST COVERAGE 100%

### DevOps:

- [x] NX monorepo
- [x] CI for tests
- [x] Deployment:
   - BackEnd - Heroku
   - FrontEnd - Hostinger
   - Storybook - Github Pages
   - Test Coverage FE - Github Pages
   - Test Coverage BE - Github Pages
- [x] CD for deployment
- [ ] DB MySQL on ClearDB Heroku
  https://devcenter.heroku.com/articles/cleardb
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

### Additional features ideas:

- [ ] AUthentication and authorization, 2FA, QR code, JWT
  https://www.udemy.com/course/react-nest-authentication/?src=sac&kw=nestjs+au
- [ ] GraphQL Playground
- [ ] GraphQL Pagination
- [ ] Search in GraphQL
- [ ] Realtime updates with GraphQL Subscriptions
- [ ] File upload with GraphQL
- [ ] Dockerize the app
- [ ] AWS
- [ ] Morpheus + Grafana monitoring on Docker container
- [ ] React Native
- [ ] MSW
- [ ] Detox
- [ ] Postman
- [ ] Chat with SocketIO (possible with GraphQL Subscriptions as well)


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
