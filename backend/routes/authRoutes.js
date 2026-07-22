import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../model/User.js";
import { requireAuth } from "../middleware/auth.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { name, email, phone, password, role = "user", adminRegistrationKey } = req.body;

    if (!name || !email || !phone || !password) {
      return res.status(400).json({ message: "Name, email, phone and password are required" });
    }
    if (password.length < 8) {
      return res.status(400).json({ message: "Password must be at least 8 characters" });
    }
    if (!["user", "admin"].includes(role)) {
      return res.status(400).json({ message: "Invalid account type" });
    }
    const normalizedEmail = email.toLowerCase().trim();
    if (role === "admin" && normalizedEmail !== process.env.ADMIN_EMAIL?.toLowerCase()) {
      return res.status(403).json({ message: "This email is not authorized for administrator registration" });
    }
    if (role === "admin" && (!process.env.ADMIN_REGISTRATION_KEY || adminRegistrationKey !== process.env.ADMIN_REGISTRATION_KEY)) {
      return res.status(403).json({ message: "Invalid admin registration key" });
    }

    let user = await User.findOne({ email: normalizedEmail });
    if (user) return res.status(409).json({ message: "An account with this email already exists. Please log in." });

    user = await User.create({
      name: name.trim(),
      email: normalizedEmail,
      phone: phone.trim(),
      password: await bcrypt.hash(password, 10),
      role,
    });

    return res.status(201).json({
      message: "Registration successful",
      user: { id: user._id, name: user.name, email: user.email, role: user.role },
    });
  } catch (error) {
    return res.status(500).json({ message: "Unable to register account" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email?.toLowerCase().trim() });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1d" });
    return res.json({
      token,
      user: { id: user._id, name: user.name, email: user.email, phone: user.phone, role: user.role },
    });
  } catch (error) {
    return res.status(500).json({ message: "Unable to log in" });
  }
});

router.get("/me", requireAuth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("name email phone role createdAt");
    if (!user) return res.status(404).json({ message: "Account not found" });
    return res.json({ user });
  } catch {
    return res.status(500).json({ message: "Unable to retrieve account" });
  }
});

export default router;
