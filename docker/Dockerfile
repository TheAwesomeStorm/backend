# Use an official Node.js runtime as a parent image
FROM node:22.12.0-alpine

# Install pnpm globally
RUN npm install -g pnpm

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and pnpm-lock.yaml to install dependencies
COPY package.json pnpm-lock.yaml ./

# Install the dependencies using pnpm
RUN pnpm install --prod

# Copy the rest of your application code
COPY . .

# Set environment variables
ENV PORT=8000
# Use the database service name from Docker Compose
ENV DATABASE_HOST=database
ENV DATABASE_PORT=5432
ENV DATABASE_NAME=db
ENV DATABASE_USER=mendes
ENV DATABASE_PASSWORD=password

# Expose the port your app will run on
EXPOSE 8000

# Start the NestJS application using pnpm
CMD ["pnpm", "run", "start:prod"]
