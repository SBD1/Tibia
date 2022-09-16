FROM node:alpine

WORKDIR /backend

COPY ./package.json .

RUN npm install

COPY ./src/ .

CMD npm run dev 