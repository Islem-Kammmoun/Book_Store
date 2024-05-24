# Use a Node.js 18 base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Ensure all files have the right permissions
RUN chmod -R 755 /app/node_modules && chmod 755 /app/index.js

# Expose the port your app runs on
EXPOSE 5555

# Start the application
CMD ["npm", "run", "dev"]
