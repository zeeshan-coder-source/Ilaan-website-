import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for frontend requests
app.use(cors({
  origin: '*', // Allow all origins for simplicity, can be restricted to localhost:5173
  methods: ['POST', 'GET'],
  allowedHeaders: ['Content-Type']
}));

// Parse JSON payloads
app.use(express.json());

// Check server health
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Contact Form Server is running' });
});

// POST endpoint for contact form submissions
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, company, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'Please fill in all required fields (Name, Email, Message).'
    });
  }

  // Set up SMTP Transporter using environment variables
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT, 10),
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for 587
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    // For local testing or if using self-signed certificates
    tls: {
      rejectUnauthorized: false
    }
  });

  // Recipient email address
  const recipientEmail = process.env.EMAIL_TO || 'muhammadzeeshan182004@gmail.com';

  // Email content and HTML design
  const mailOptions = {
    from: `"${name}" <${process.env.SMTP_USER}>`, // Sender: your SMTP user account showing submitter's name
    replyTo: email, // Set reply-to to the submitter's email so recipient can reply directly
    to: recipientEmail,
    subject: `New Contact Inquiry from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone || 'N/A'}
      Company: ${company || 'N/A'}
      Message: ${message}
    `,
    html: `
      <div style="font-family: 'Poppins', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 12px; background-color: #fcfcfc;">
        <div style="background-color: #86b52a; padding: 15px; border-radius: 8px 8px 0 0; text-align: center; color: white;">
          <h2 style="margin: 0; font-size: 24px; font-weight: 600;">New Inquiry Recieved</h2>
        </div>
        <div style="padding: 20px; color: #333333; line-height: 1.6;">
          <p style="margin-top: 0; font-size: 16px;">Hello Team,</p>
          <p style="font-size: 15px; margin-bottom: 20px;">You have received a new contact submission from the website. Details are provided below:</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
            <tr style="border-bottom: 1px solid #eeeeee;">
              <td style="padding: 10px 0; font-weight: bold; width: 130px; color: #666666;">Name:</td>
              <td style="padding: 10px 0; color: #111111;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eeeeee;">
              <td style="padding: 10px 0; font-weight: bold; color: #666666;">Email:</td>
              <td style="padding: 10px 0; color: #111111;"><a href="mailto:${email}" style="color: #86b52a; text-decoration: none;">${email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #eeeeee;">
              <td style="padding: 10px 0; font-weight: bold; color: #666666;">Phone:</td>
              <td style="padding: 10px 0; color: #111111;">${phone || '<span style="color: #999;">Not Provided</span>'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eeeeee;">
              <td style="padding: 10px 0; font-weight: bold; color: #666666;">Company:</td>
              <td style="padding: 10px 0; color: #111111;">${company || '<span style="color: #999;">Not Provided</span>'}</td>
            </tr>
          </table>

          <div style="background-color: #f7f9f2; border-left: 4px solid #86b52a; padding: 15px; border-radius: 0 8px 8px 0; font-style: italic; color: #555555; font-size: 15px;">
            <strong>Message:</strong><br/>
            ${message.replace(/\n/g, '<br/>')}
          </div>
        </div>
        <div style="text-align: center; font-size: 12px; color: #999999; margin-top: 30px; border-top: 1px solid #eeeeee; padding-top: 15px;">
          This email was sent automatically from your website's contact form.
        </div>
      </div>
    `
  };

  try {
    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    
    return res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully!'
    });
  } catch (error) {
    console.error('Error sending SMTP email:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to send message. Please ensure your SMTP configuration in the backend is correct.'
    });
  }
});

// Start Express server
app.listen(PORT, () => {
  console.log(`Contact backend running on http://localhost:${PORT}`);
});
