FROM node:alpine

WORKDIR /app

COPY ./package.json .

RUN npm install

COPY ./src/ .
COPY ./index.html .
COPY ./index.js .
COPY ./map.js .

CMD npm start