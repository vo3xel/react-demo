
# react-demo

This repo holds a dockerized state-of-the-art react application with react 16, threejs, JWT token, redux, fake-backend, bootstrap, styled components and react testing library.

The app is available online => [https://michaelspitzer.at/react-demo/](https://michaelspitzer.at/react-demo/)

# Setup

## Environment

* Docker Community Edition [https://www.docker.com/](https://www.docker.com/)
* NodeJS LTS version (no installation, is provided within the docker image)
* Yarn 2 (no installation, is provided within the docker image)
* GitHub Desktop (recommended) [https://desktop.github.com/](https://desktop.github.com/) 
* Visual Studio Code with extensions (recommended)
    * Docker
    * Debugger for Chrome
    * ESLint

## Visual studio code debugger settings

Create .vscode/launch.json within project root.

```yaml
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "chrome",
            "request": "launch",
            "name": "Launch Chrome against localhost",
            "url": "http://localhost:3000",
            "webRoot": "${workspaceFolder}"
        }
    ]
}
```

## Folder structure

* actions: holds all reducer actions, naming => redux reducer slice + actions . js (example: user.actions.js)
* assets: holds all media, images, ...
* components: holds all react components and related files
* config: holds configuration files e.g. dev.json
* constants: holds all constants, naming for redux actions => redux reducer slice + constants . js (example: user.constants.js)
* helpers: holds all helper functions, which are not tied to any component, e.g. fake-backend
* reducers: holds all reducers, naming => redux reducer slice + reducer . js (example: user.reducer.js)
* services: holds all backend request functionality, naming => reduc reducer slice + service . js (example: user.service.js)

## Docker

This project is dockerized. Two environments are available.

* dev.Dockerfile
* prod.Dockerfile

The development environment creates an alpine container with node-lts and exposes the react app on port 3000.
The production environment creates a bild container first in which the application is packed. Then an nginx container is spawned which serves the built application on port 80.
The development environment can be started with: 

```shell
docker-compose -f .\docker-compose-dev.yml up
```

The production environment can be started with: 

```shell
docker-compose -f .\docker-compose-prod.yml up
```
The production prototype is then running on [http://localhost/react-demo].

## Credits

This repo follows principles found in several sources and combines the most valuable approaches (from my point of view) in this demo repository.
* React + Redux - JWT Authentication Tutorial & Example => [https://jasonwatmore.com/post/2017/12/07/react-redux-jwt-authentication-tutorial-example](https://jasonwatmore.com/post/2017/12/07/react-redux-jwt-authentication-tutorial-example)
* Dockerizing a React App => [https://mherman.org/blog/dockerizing-a-react-app/](https://mherman.org/blog/dockerizing-a-react-app/)
* React three fiber demo => [https://codesandbox.io/s/react-three-fiber-demo-cw055?from-embed](https://codesandbox.io/s/react-three-fiber-demo-cw055?from-embed)
* React threejs demo (package: react-three-fiber) => [https://github.com/react-spring/react-three-fiber](https://github.com/react-spring/react-three-fiber)
