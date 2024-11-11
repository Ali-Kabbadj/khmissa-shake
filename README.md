# 🪬KhmissaShake

A digital platform connecting Moroccan artisans with international designers.

## 🛠 Tech Stack

### Frontend

- Next.js 14
- React 19
- TypeScript
- Tailwind CSS
- shadcn/ui
- Tanstack Query
- Zod

### Backend

- Nest.js
- TypeScript
- PostgreSQL
- Swagger
- Prisma/GraphQl

## 🚀 Getting Started

### Prerequisites

- Node.js 22+
- pnpm 8+
- Docker (optional)
- PostgreSQL (if not using Docker)

### Development Setup

1. Clone the repository

```bash
git clone https://github.com/Ali-Kabbadj/khmissa-shake.git
cd khmissa-shake
```

2. Frontend Setup

```bash
cd frontend
pnpm install
pnpm dev
```

3. Backend Setup

```bash
cd backend
pnpm install
pnpm start:dev
```

### Using Docker

```bash
docker-compose up --build
```

## 🔧 Environment Variables

### Frontend (.env)

```plaintext
NEXT_PUBLIC_API_URL=http://localhost:3333
```

### Backend (.env)

```plaintext
PORT=3333
NODE_ENV=development||prod
DATABASE_URL=postgresql://username:password@localhost:5433/khmissa?schema=public
```

## 📁 Project Structure

```
khmissa-shake/
├── frontend/          # Next.js application
├── backend/           # Nest.js application
├── docker-compose.yml # Development environment
└── .gitignore         # Root gitignore
```

## 🤝 Contributing

[To be added]

## 📝 License

[To be added]
