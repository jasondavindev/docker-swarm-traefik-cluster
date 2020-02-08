FROM node:12.14.0 as app

RUN mkdir -p /home/node/app && \
  chown -R node:node /home/node

WORKDIR /home/node/app

USER node

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 3000

FROM app as app2

EXPOSE 5000

CMD [ "node", "src/index.js" ]
