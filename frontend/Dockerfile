FROM node:14.17.6-alpine3.12

WORKDIR /home/node/app
COPY package*.json ./
COPY index.js ./
COPY public ./public/

RUN npm install
EXPOSE 3000
CMD ["node", "index.js"]