# ./Dockerfile
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build
# ...
# Etap 2: uruchomienie aplikacji w produkcji
FROM node:20-alpine

WORKDIR /app

# Przenieś tylko to, co potrzebne do uruchomienia
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package*.json ./

RUN npm install --omit=dev

EXPOSE 3000

CMD ["npm", "run", "start"]