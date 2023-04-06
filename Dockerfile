# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the app's source code to the container
COPY . .

# Build the app
RUN npm run build

# Expose the port used by the app
EXPOSE 3000

# Start the app
CMD ["npm", "start"]