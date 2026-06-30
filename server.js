import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

// API route to send email
app.post('/api/send-email', async (req, res) => {
  const { name, company, email, phone, subject, message } = req.body;

  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return res.status(500).json({ 
      success: false, 
      error: 'SMTP credentials are not configured. Please set SMTP_USER and SMTP_PASS in the .env file.' 
    });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for 587
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name} (${company})" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: process.env.SMTP_TO_EMAIL || process.env.SMTP_USER,
      subject: `Lexpo Inquiry: ${subject}`,
      text: `Name: ${name}\nCompany: ${company}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h2 style="color: #0f172a; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; margin-top: 0;">New Lexpo Corporate Inquiry</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 6px 0; font-weight: bold; color: #475569; width: 120px;">Name:</td>
              <td style="padding: 6px 0; color: #0f172a;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold; color: #475569;">Company:</td>
              <td style="padding: 6px 0; color: #0f172a;">${company}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold; color: #475569;">Email:</td>
              <td style="padding: 6px 0; color: #0f172a;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold; color: #475569;">Phone:</td>
              <td style="padding: 6px 0; color: #0f172a;">${phone || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold; color: #475569;">Subject:</td>
              <td style="padding: 6px 0; color: #0f172a;">${subject}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 15px; border-left: 4px solid #b4975a; background: #f8fafc; border-radius: 4px;">
            <p style="margin: 0; font-weight: bold; color: #475569; margin-bottom: 8px;">Message:</p>
            <p style="margin: 0; color: #0f172a; white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
        </div>
      `,
    });

    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Serve static assets in production
app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
