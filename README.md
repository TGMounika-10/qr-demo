# HoneyChain QR Verification Demo

A frontend-only honey traceability and batch verification demo built with React, React Router, Tailwind CSS, and QR code generation.

## Overview

This project demonstrates a mock HoneyChain workflow where:
- a batch like `HC001` is shown on the admin/demo page
- a QR code is generated dynamically
- scanning the QR opens `/verify/HC001`
- a consumer verification page displays product, origin, certification, quality, journey, and blockchain-simulated status information

This is a frontend-only prototype and does not use a real backend, database, blockchain, or authentication.

## Features

- QR code generation using `qrcode.react`
- Batch verification page with product passport styling
- Certification and report modal views
- Responsive design for mobile-first verification flows
- Static mock data stored in a JavaScript file
- Vercel-friendly SPA routing configuration

## Local development

```bash
npm install
npm run dev
```

The app will be available at:

```text
http://localhost:5173/
```

## Demo flow

1. Open the homepage at `/`
2. View the `HC001` batch record
3. Scan the generated QR code or open the verification page button
4. Visit `/verify/HC001`
5. Review batch details, certifications, quality indicators, journey timeline, and simulated blockchain verification

## Production deployment on Vercel

This project includes a `vercel.json` file with SPA rewrites so deep links like `/verify/HC001` work correctly after deployment.

### Deploy steps

1. Push this repo to GitHub
2. Import the project in Vercel
3. Use the default Vite configuration
4. Deploy

## Project structure

```text
src/
  components/
  data/
  pages/
  App.jsx
  main.jsx
  index.css
```

## Notes

- Blockchain and certification data are simulated demo data only.
- The app is designed as a hackathon-ready prototype.
- All verification is frontend-only and static.
