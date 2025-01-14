FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Install serve to host the static files
RUN npm install -g serve

EXPOSE 4449

CMD ["serve", "-s", "dist", "-l", "4449"] 