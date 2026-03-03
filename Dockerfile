# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Copia os arquivos de dependência
COPY package*.json ./

# Instala as dependências (incluindo devDependencies para o build)
RUN npm ci

# Copia o código fonte
COPY . .

# Executa o build do TypeScript
RUN npm run build

# Stage 2: Production
FROM node:20-alpine AS runner

WORKDIR /app

# Define ambiente de produção
ENV NODE_ENV=production

# Variáveis de ambiente padrão para conexão com banco de dados (sobrescrever no docker-compose ou runtime)
# ENV DB_HOST=localhost
# ENV DB_PORT=5432
# ENV DB_USER=postgres
# ENV DB_PASSWORD=postgres
# ENV DB_NAME=learndb

# Copia apenas os arquivos necessários para instalar dependências de produção
COPY package*.json ./

# Instala apenas dependências de produção
RUN npm ci --omit=dev && npm cache clean --force

# Copia os arquivos compilados do estágio de build
COPY --from=builder /app/dist ./dist

# Cria um usuário não-root para segurança
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

# Expõe a porta que a aplicação utiliza
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["node", "dist/index.js"]
