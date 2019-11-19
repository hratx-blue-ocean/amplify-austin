FROM node:10.17.0-alpine
WORKDIR /src/app
RUN npm run setup
COPY . .
RUN npm run deploy
EXPOSE 8000
CMD [ "node", "server.js" ]