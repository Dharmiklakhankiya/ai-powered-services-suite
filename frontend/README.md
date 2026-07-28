# Frontend — AI Powered Services Suite

This folder contains the Next.js frontend for the AI Powered Services Suite. It provides a small UI to interact with the services in the root `services/` folder (AI, booking, resume, etc.) and includes references for local development.

## Quick overview

- Framework: Next.js (app router)
- Package manager: `pnpm`
- Node: v16+ recommended

## Prerequisites

- Install Node.js (v16 or newer)
- Install `pnpm` globally: `npm i -g pnpm`

## Setup

Install dependencies from the repository root (recommended):

```bash
pnpm install
```

To install dependencies only for the frontend:

```bash
cd frontend
pnpm install
```

## Development

Run the dev server from the `frontend` folder:

```bash
cd frontend
pnpm dev
```

Open http://localhost:3000 to view the app.

## Build

```bash
cd frontend
pnpm build
pnpm start
```

## Project structure (high level)

- `app/` — Next.js app router files and pages
- `public/` — static assets
- `styles/` or `globals.css` — global styles
- `AGENTS.md`, `CLAUDE.md` — project-specific docs and notes

## Contributing

- Follow existing code style and lint rules in the repo.
- Open PRs against the main branch and include a brief description of changes.

## Notes

- This README is a starting point. Add more details about environment variables, third-party services, and API endpoints as the frontend integrates with the backend services.

## Run the full suite

From the repository root you can run the frontend and services together or individually using the provided npm scripts.

- Run everything in development (frontend + all services):

```bash
pnpm dev
```

- Run only the frontend (dev):

```bash
pnpm dev:frontend
```

- Run a single service (dev), for example the AI service:

```bash
pnpm dev:ai-service
```

- Start all services and frontend in production mode:

```bash
pnpm start:all
```

If a service doesn't yet include source files, the `dev` scripts are placeholders using `tsx` — create `src/index.ts` for each service to enable them.
