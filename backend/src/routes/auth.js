import express from "express";
import bcrypt from "bcrypt";
import prisma from "../prisma.js";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const normalizedEmail = email.toLowerCase();

        const existingUser = await prisma.user.findUnique({
            where: { email: normalizedEmail },
        });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists " });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                name,
                email: normalizedEmail,
                password: hashedPassword,
            },
        });
        res.json({ message: "user registered successfully" });
    } catch (error) {
        console.error("Registration error:", error);
        if (error.code === 'P2002') {
            return res.status(400).json({ message: "User already exists (unique constraint)" });
        }
        res.status(500).json({ message: "Internal server error" });
    }
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const normalizedEmail = email.toLowerCase();
    //  check user exists
    const user = await prisma.user.findUnique({
        where: { email: normalizedEmail },
    });
    if (!user) {
        return res.status(400).json({
            message: "invalid credentials"
        });
    }

    //compare password

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(400).json({ message: "invalid credentials" });
    }

    //generate JWT

    const token = jwt.sign(
        { userId: user.id },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
    );

    //send token
    res.json({
        message: "Login successful",
        token,
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
        },
    });
});

export default router;