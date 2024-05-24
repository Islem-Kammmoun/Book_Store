# Stage 1: Build the React application with Vite
FROM node:18-alpine as build-stage

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the built application with Nginx
FROM nginx:alpine

# Copy the build output from the build stage
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Copy the custom Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 5173
EXPOSE 5173

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]


# # Stage 1: Build the React application with Vite
# FROM node:18-alpine as build-stage

# # Set working directory
# WORKDIR /app

# # Copy package.json and package-lock.json
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the application
# COPY . .

# # Build the application
# RUN npm run build

# # Stage 2: Serve the built application with Nginx
# FROM nginx:alpine

# # Copy the build output from the build stage
# COPY --from=build-stage /app/dist /usr/share/nginx/html

# # Expose port 80
# EXPOSE 5173

# # Start the Nginx server
# CMD ["npm", "run", "dev"]

