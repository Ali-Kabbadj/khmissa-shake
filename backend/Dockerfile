FROM node:20-alpine AS base
RUN npm i -g pnpm

FROM base AS builder
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --no-frozen-lockfile
COPY . .
RUN pnpm build

FROM base AS runner
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
EXPOSE 3333
CMD ["pnpm", "start:prod"]