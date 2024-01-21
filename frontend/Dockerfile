FROM node:16

WORKDIR /React_Project

COPY package.json ./

RUN npm install

COPY .  .

ENV PORT=3000

EXPOSE 3000

CMD ["npm", "start"]