FROM node:10

WORKDIR /usr/src/app

COPY . .

CMD [ "npm", "start" ]