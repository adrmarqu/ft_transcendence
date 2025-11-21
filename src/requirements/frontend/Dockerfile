FROM node:18 AS build
WORKDIR /app
COPY . .
RUN npm install -g typescript && tsc main.ts --outDir dist

FROM nginx:alpine
COPY dist /usr/share/nginx/html
COPY index.html /usr/share/nginx/html
COPY styles.css /usr/share/nginx/html
