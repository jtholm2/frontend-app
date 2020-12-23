FROM node:10

# To Create nodejsapp directory
WORKDIR /frontendapp

# To Install All dependencies

COPY package*.json ./

RUN npm install

# To copy all application packages 
COPY . .

# Expose port 3000 and Run the server.js file to start node js application
EXPOSE 3000
CMD [ "node", "./dist/server.js" ]
