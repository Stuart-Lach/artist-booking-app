// backend/src/controllers/bookingsController.js
import prisma from "../utils/prisma.js";

export async function createBooking(req, res) {
  try {
    const { clientName, clientEmail, projectType, date, message } = req.body;

    if (!clientName || !clientEmail || !projectType || !date) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const booking = await prisma.booking.create({
      data: {
        clientName,
        clientEmail,
        projectType,
        date: new Date(date),
        message: message || null,
      },
    });

    return res.status(201).json({ booking });
  } catch (err) {
    console.error("Error creating booking:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}

export async function listBookings(req, res) {
  try {
    const bookings = await prisma.booking.findMany({
      orderBy: { createdAt: "desc" },
    });
    return res.json({ bookings });
  } catch (err) {
    console.error("Error listing bookings:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
