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
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

# Install OpenSSL
FROM base AS prisma-studio
RUN apt-get update -y && apt-get install -y openssl
CMD pnpm prisma studio --schema=prisma/auth/schema.prisma

# Build the application
# RUN pnpm run build

# Run the application
FROM base
CMD ["pnpm", "run", "start:dev"]