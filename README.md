# judo-heroes

Universal Javascript sample application with React Router 4 and Express 5 (Enhanced version of https://github.com/lmammino/judo-heroes)

Following Luciano Mammino's tutorial:

https://www.youtube.com/watch?v=0VEwRFP8WtI

https://scotch.io/tutorials/react-on-the-server-for-beginners-build-a-universal-react-and-node-app

http://loige.co/my-universal-javascript-web-applications-talk-at-codemotion-rome-2017/




## Setup

```bash
git clone https://github.com/PiotrBerebecki/react-universal-app-judo-heroes.git
cd react-universal-app-judo-heroes
yarn # or `npm i` if not using yarn
```

## Available commands

Available commands to run with `npm run`:

 - `start`: build the production package and run the production server (no universal)
 - `start:universal`: build the production package and run the production server with universal rendering
 - `start:dev`: build the dev package and run the server in dev mode (no universal rendering — auto-restarts on changes)
 - `start:dev:universal`: build the dev package and run the server in dev mode with universal rendering (auto-restarts on changes)
 - `build`: build the production package
 - `build:dev`: build the dev package
 - `build:dev:watch`: build the dev package in watch mode (listen for changes and re-build immediately)
