import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Ensure we always load .env from this backend folder,
// even when started via PM2 from another cwd.
const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, ".env") });

const app = express();

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

/* ===============================
   LEAD COLLECTION (NO TOKEN)
   =============================== */
app.post("/api/lead", async (req, res) => {
  const { name, email, phone, packageId } = req.body;

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "dewdale.resorts@gmail.com",
      subject: "New Package Enquiry (Lead)",
      text: `
New Lead Received

Name: ${name}
Email: ${email}
Phone: ${phone}
Package: ${packageId}
      `,
    });

    res.json({ success: true });
  } catch (error) {
    console.error("❌ Lead mail failed", error);
    res.status(500).json({ success: false });
  }
});

/* ===============================
   FINAL BOOKING (WITH TOKEN)
   =============================== */
app.post("/api/book-tour", async (req, res) => {
  console.log("📨 Booking request received:", req.body);

  const { name, email, phone, token, packageId } = req.body;

  try {
    // Admin email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "dewdale.resorts@gmail.com",
      subject: `New Tour Booking – ${token}`,
      text: `
New Tour Booking

Name: ${name}
Email: ${email}
Phone: ${phone}
Package: ${packageId}
Token: ${token}
      `,
    });

    // User email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Your Tour Booking Token – ${token}`,
      text: `
Hello ${name},

Thank you for booking with Dew Dale Resorts.

Your booking token is: ${token}

Our team will contact you shortly.

Regards,
Dew Dale Resorts
      `,
    });

    console.log("✅ Emails sent successfully");
    res.json({ success: true });
  } catch (error) {
    console.error("❌ Booking mail failed", error);
    res.status(500).json({ success: false });
  }
});

const PORT = process.env.PORT || 5019;

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});

