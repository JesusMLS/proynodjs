FROM node:latest

WORKDIR /proynodjs
COPY package.json .
RUN npm install
COPY . .
CMD npm start