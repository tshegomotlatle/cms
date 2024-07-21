# Use Node.js as the base image
FROM node:18 AS builder


# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the React application
RUN npm run build 

# Use Nginx to serve the built application
FROM nginx

# Copy the built files from the builder stage
COPY --from=builder /app/dist/apps/cms /usr/share/nginx/html

#Copy a custom Nginx configuration if needed
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]