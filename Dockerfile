FROM node:18-alpine
RUN apk add --no-cache python3 make g++ openssl

# Expose is only metadata; Render ignores it.
EXPOSE 10000

WORKDIR /app
ENV NODE_ENV=production

COPY package.json package-lock.json* ./
RUN npm ci --omit=dev && npm cache clean --force
RUN npm remove @shopify/cli

# Copy all source files—this currently includes .env
COPY . .

# Remove the .env so dotenv can't inject your local host/port
RUN rm -f .env

# Build your Remix app
RUN npm run build

# Start uses the updated 'start' script which only specifies --host
CMD ["npm", "run", "docker-start"]


//===================

