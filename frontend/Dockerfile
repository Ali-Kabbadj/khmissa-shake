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
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.env ./
ENV PATH="/app/node_modules/.bin:${PATH}"
EXPOSE 3000
CMD ["pnpm", "start"]