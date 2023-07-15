FROM node:16.18.0

# Create app directory
WORKDIR /app

# Install app dependencies
COPY *.json ./
# Install app dependencies from package-lock
RUN npm ci

# Bundle app source
COPY src .

CMD ["npm", "start"]