FROM node:10

# To Create nodejsapp directory
WORKDIR /frontendapp

# To Install All dependencies

COPY package*.json ./

RUN npm install

# To copy all application packages 
COPY . .

EXPOSE 8080

CMD ["node", "./dist/server.js"]
