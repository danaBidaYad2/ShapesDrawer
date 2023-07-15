FROM node:16.18.0

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY *.json ./
# Install app dependencies from package-lock
RUN npm ci --omit=dev

# Bundle app source
COPY . .

CMD ["node", "src/main.js"]