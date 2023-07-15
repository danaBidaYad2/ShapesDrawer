FROM node:16.18.0

# Create app directory
WORKDIR /usr/src

# Install app dependencies
COPY *.json ./
RUN npm i -g nodemon
# Install app dependencies from package-lock
RUN npm ci

# Bundle app source
COPY src .

CMD node main.js