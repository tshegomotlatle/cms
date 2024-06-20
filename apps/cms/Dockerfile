# Step 1: Use a Node.js image as the base image
FROM node:18

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json (or yarn.lock) files
COPY package.json package-lock.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application code
COPY . .

# Step 9: Expose port 80
EXPOSE 4200

# Step 10: Start Nginx
RUN npm run start-frontend