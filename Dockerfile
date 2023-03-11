# Base image
FROM node:19-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Build the application
RUN npm run build:api && pwd

# Copy built application
COPY dist/apps/api/ ./

# Start the application
CMD ["node", "main.js"]
