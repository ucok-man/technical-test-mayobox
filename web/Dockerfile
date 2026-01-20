FROM node:20-alpine AS base
 
FROM base AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .

# Add build arg for NEXT_PUBLIC_ variable
ARG NEXT_PUBLIC_BASE_SERVER_URL

# Set it as env var for the build
ENV NEXT_PUBLIC_BASE_SERVER_URL=$NEXT_PUBLIC_BASE_SERVER_URL
ENV NODE_ENV=production
RUN npm run build
 
FROM base AS dokploy

WORKDIR /app
ENV NODE_ENV=production

# The node:alpine image already has a 'node' user with uid/gid 1000

# Copy only the necessary files
COPY --from=build --chown=node:node /app/package*.json ./
COPY --from=build --chown=node:node /app/node_modules ./node_modules
COPY --from=build --chown=node:node /app/.next ./.next
COPY --from=build --chown=node:node /app/public ./public
COPY --from=build --chown=node:node /app/next.config.* ./

USER node
EXPOSE 3000

CMD ["npm", "run", "start"]