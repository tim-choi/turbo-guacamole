import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";
import nodemailer from "nodemailer";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body
      const validatedData = contactFormSchema.parse(req.body);

      // Create email transporter (using a service like Gmail, SendGrid, etc.)
      // For demo purposes, we'll log the email instead of sending
      console.log("Contact form submission:", {
        name: validatedData.name,
        email: validatedData.email,
        message: validatedData.message,
        timestamp: new Date().toISOString()
      });

      // In a production environment, you would set up nodemailer like this:
      /*
      const transporter = nodemailer.createTransporter({
        service: 'gmail', // or your email service
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD
        }
      });

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: 'hello@alexchen.design', // your email
        subject: `Portfolio Contact from ${validatedData.name}`,
        html: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Message:</strong></p>
          <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
        `
      });
      */

      res.json({ 
        success: true, 
        message: "Thank you for your message! I'll get back to you soon." 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({
          success: false,
          error: "Validation failed",
          details: validationError.message
        });
      }

      console.error("Contact form error:", error);
      res.status(500).json({
        success: false,
        error: "Failed to send message. Please try again later."
      });
    }
  });

  // Resume download endpoint
  app.get("/api/resume/download", async (req, res) => {
    try {
      const resumePath = path.join(process.cwd(), "attached_assets", "documents", "alex-chen-resume.pdf");
      
      console.log("Resume download requested:", {
        timestamp: new Date().toISOString(),
        userAgent: req.get('User-Agent')
      });

      // Set caching headers
      res.setHeader('Cache-Control', 'public, max-age=3600'); // Cache for 1 hour
      
      // Use res.download for proper file handling
      res.download(resumePath, "Alex-Chen-Resume.pdf", (err) => {
        if (err) {
          console.error("Resume download error:", err);
          if (!res.headersSent) {
            res.status(404).json({
              success: false,
              error: "Resume file not found"
            });
          }
        }
      });
    } catch (error) {
      console.error("Resume download error:", error);
      res.status(500).json({
        success: false,
        error: "Failed to download resume"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
