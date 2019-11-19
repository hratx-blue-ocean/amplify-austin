FROM node:10
WORKDIR /usr/src/app
COPY package*.json ./
COPY ./client/package*.json ./
COPY ./db/package*.json ./
COPY ./server/package*.json ./
RUN npm install
COPY . .
RUN npm run deploy:build
EXPOSE 8000
CMD [ "node", "./server/bin/www" ]

