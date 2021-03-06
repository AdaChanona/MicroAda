FROM node:14
COPY [".", "/usr/src/"]
WORKDIR /usr/src
RUN npm install
EXPOSE 8080
ENTRYPOINT ["npm","run","start"]