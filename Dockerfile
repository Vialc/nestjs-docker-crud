FROM node:12

# App Directory

WORKDIR /vitor/src/app

COPY package*.json ./

RUN npm install

RUN npm install webpack

RUN npm link webpack

COPY . .

RUN npm run build

EXPOSE 8080
CMD [ "node", "dist/main"]