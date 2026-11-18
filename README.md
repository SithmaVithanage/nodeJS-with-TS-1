# TypeScript Practice

A small practice project to learn TypeScript, Node.js, and automatic server restarting using PM2.

## Technologies
- Node.js
- TypeScript
- PM2

## Features
- Basic HTTP server
- TypeScript compilation
- Automatic compilation using watch mode
- Automatic server restarting with PM2

## Run the Project

```bash
npm install
npx tsc --watch
```

In another terminal:

```bash
npx pm2-dev dist/app.js
```

Open your browser:

```text
http://localhost:3000
```

## Purpose

This project is created for learning and practising backend development with TypeScript and Node.js.
