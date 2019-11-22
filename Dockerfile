FROM node:10.17.0-alpine
WORKDIR /usr/src/app
COPY . .
RUN npm run deploy
EXPOSE 8000
CMD [ "node", "./server/bin/www" ]