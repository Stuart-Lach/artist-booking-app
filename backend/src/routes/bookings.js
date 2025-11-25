// backend/src/routes/bookings.js
import express from "express";
import {
  createBooking,
  listBookings,
} from "../controllers/bookingsController.js";

const router = express.Router();

router.get("/", listBookings);
router.post("/", createBooking);

export default router;
