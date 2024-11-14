# Use the Node.js 20 slim image as the base
FROM node:20-slim AS base

# Set the working directory
WORKDIR /app

# Enable pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# Copy the project files
COPY . .

# Install dependencies
COPY package.json pnpm-lock.yaml ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

# Generate Prisma client
RUN apt-get update -y && apt-get install -y openssl
RUN pnpm prisma generate --schema=prisma/auth/schema.prisma

# Install OpenSSL
FROM base AS prisma-studio
RUN apt-get update -y && apt-get install -y openssl
CMD pnpm prisma studio --schema=prisma/auth/schema.prisma

# Build the application
# RUN pnpm run build

# Run the application
FROM base
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=build /app/build /app/build
CMD ["pnpm", "run", "start:dev"]