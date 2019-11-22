FROM node:10.17.0-alpine
WORKDIR /usr/src/app
COPY . .
ENV key=value
ENV key=value
ENV key=value
RUN npm run deploy:production
EXPOSE 8000
CMD [ "node", "./server/bin/www" ]