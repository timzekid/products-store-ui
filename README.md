# Products store application

### Installation

1 - Clone the front-end and [back-end](https://github.com/yaDaryStil/products-store-be) parts of the project

```sh
$ mkdir products-store
$ cd products-store
$ git clone git@github.com:yaDaryStil/products-store-ui.git
$ git clone git@github.com:yaDaryStil/products-store-be.git
```

2 - Install dependencies via [npm](https://www.npmjs.com)
```sh
$ cd products-store-ui
$ npm install
$ cd ../products-store-be
$ npm install
```

3 - Run the [mongo](http://www.mongodb.org) database server
```sh
$ mongod
```

4 - Run the server
```sh
$ npm run nodemon
```

5 - Run dev server
```sh
$ cd ../products-store-ui
$ npm run devserver
```

#### Go to [http://localhost:8090/](http://localhost:8090/#/)

---
### General description

- SPA for storing products using [React](https://github.com/facebook/react), [Redux](https://github.com/reactjs/redux), [react-router](https://github.com/rackt/react-router), [Webpack](https://github.com/webpack), [redux-observable](https://github.com/redux-observable/redux-observable), [Material-UI](https://github.com/callemall/material-ui)
- REST API with CRUD using [Node](https://github.com/nodejs), [Express](https://github.com/expressjs/express), [MongoDB](https://www.mongodb.com/)
- ES6/7
- Also validation of forms and pagination were implemented


---
### Some screenshots
![Scr1](https://raw.githubusercontent.com/yaDaryStil/products-store-ui/master/public/static/screenshots/1.png)
![Scr2](https://raw.githubusercontent.com/yaDaryStil/products-store-ui/master/public/static/screenshots/2.png)
![Scr3](https://raw.githubusercontent.com/yaDaryStil/products-store-ui/master/public/static/screenshots/3.png)

