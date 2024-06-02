# Budowanie aplikacji Node.js
FROM node:14 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY . .

# Uruchomienie aplikacji na lekkim obrazie
FROM node:14-alpine AS final

WORKDIR /app

COPY --from=build /app .

EXPOSE 3000

CMD ["node", "server.js"]
# Uruchomienie serwera

# Metadane obrazu
LABEL maintainer="Roman Pozii"
