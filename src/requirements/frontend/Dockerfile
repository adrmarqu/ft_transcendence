FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm install -g typescript http-server
RUN tsc

EXPOSE 8080

CMD ["http-server", "-p", "8080"]
