# Use Node.js as the base image
FROM node:latest AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the NestJS API
RUN npx nx build cms-api --prod

# Create a smaller image for running the application
FROM node:latest

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production

# Run prisma genrate
COPY ./prisma ./prisma
RUN npx prisma generate

# Copy the built application from the builder stage
COPY --from=builder /app/dist/apps/cms-api ./dist

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["node", "dist/main"]