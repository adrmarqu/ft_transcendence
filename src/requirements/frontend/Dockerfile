FROM node:lts-alpine

WORKDIR /app

COPY package.json yarn.lock tsconfig.json ./

RUN yarn install && yarn global add server typescript

COPY . .

RUN tsc

EXPOSE 3000

CMD ["serve", ".", "-l", "3000"]
