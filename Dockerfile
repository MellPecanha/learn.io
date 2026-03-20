FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Variáveis de ambiente padrão para conexão com banco de dados (sobrescrever no docker-compose ou runtime)
# ENV DB_HOST=localhost
# ENV DB_PORT=5432
# ENV DB_USER=postgres
# ENV DB_PASSWORD=postgres
# ENV DB_NAME=learndb

COPY package*.json ./

RUN npm ci --omit=dev && npm cache clean --force

COPY --from=builder /app/build ./build

RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

EXPOSE 3000

CMD ["node", "build/server.js"]
