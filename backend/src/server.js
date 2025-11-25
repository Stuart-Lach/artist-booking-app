// backend/src/server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import bookingsRouter from "./routes/bookings.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // Vite dev server
    methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

// Healthcheck
app.get("/", (req, res) => {
  res.json({ message: "Artist Booking API running" });
});

// API routes
app.use("/bookings", bookingsRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
