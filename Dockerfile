FROM node:10
WORKDIR /production
COPY . .
RUN npm run deploy:build
EXPOSE 8080
CMD [ "node", "./server/bin/www" ]

