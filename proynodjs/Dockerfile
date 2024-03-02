FROM node:latest

WORKDIR /proynodjs
COPY package.json .
RUN npm install
EXPOSE 4000
COPY . .
CMD npm start