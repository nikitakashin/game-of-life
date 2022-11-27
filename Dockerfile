FROM node:16.13.0-alpine

RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

ENV DOCKER=true

RUN apk add --update python3 make g++ && rm -rf /var/cache/apk/*

COPY . /usr/src/nuxt-app/
RUN npm i
RUN npm run build

EXPOSE 3001

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3001

CMD [ "npm", "start" ]
