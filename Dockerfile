FROM node:16.18.1-slim

RUN npm i -g @angular/cli@15.0

WORKDIR /projects

EXPOSE 4200