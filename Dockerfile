FROM node:10
WORKDIR /usr/src/app
COPY . .
RUN npm run setup
RUN npm run deploy:build
EXPOSE 8000
CMD [ "node", "./server/bin/www" ]

