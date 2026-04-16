import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";


dotenv.config();

const app = express();
app.set("trust proxy", true);

app.use((req, res, next) => {
  const host = req.headers.host || "";
  const isWww = host.startsWith("www.");

  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "SAMEORIGIN");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  res.setHeader("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  res.setHeader("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");

  if (isWww) {
    const protocol = req.headers["x-forwarded-proto"] || req.protocol || "https";
    const destination = `${protocol}://dewdaleresorts.online${req.originalUrl}`;
    return res.redirect(301, destination);
  }

  next();
});

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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

