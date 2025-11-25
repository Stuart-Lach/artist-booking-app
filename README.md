# ArtistBook – Influencer Booking & Dashboard Demo

Live demo: https://artist-booking-app-eight.vercel.app  
API: https://artist-booking-app-o80p.onrender.com

ArtistBook is a full-stack demo app for managing influencer and artist bookings.
It’s built as a portfolio piece to showcase production-style booking flows, dashboards,
and CRUD APIs.

---

## Features

- **Marketing Landing Page**
  - Clean, responsive hero section
  - Clear value proposition for creators/managers
  - CTA to start a booking

- **Booking Request Flow**
  - Public form for brands/clients
  - Required fields: name, email, project type, date, details
  - Validation and user-friendly error states
  - Sends data to a real backend API

- **Creator Dashboard**
  - Overview stats (total, pending, accepted, declined)
  - Live table of incoming bookings from the database
  - Status badges with clear visual states

---

## Tech Stack

**Frontend**
- React (Vite)
- React Router
- Tailwind CSS

**Backend**
- Node.js + Express
- Prisma ORM
- SQLite (via Prisma) on Render

**Infra**
- Frontend deployed on Vercel
- Backend API deployed on Render

---

## Running Locally

### Backend

```bash
cd backend
npm install
npx prisma generate
npx prisma migrate dev --name init
npm run dev
# http://localhost:4000
