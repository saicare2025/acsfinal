// lib/mail.js
import nodemailer from 'nodemailer';

/**
 * Create a nodemailer transporter using SMTP credentials from environment variables
 */
const createTransporter = () => {
  return nodemailer.createTransporter({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT || 587,
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

/**
 * Send an email with optional PDF attachment
 * @param {Object} options - Email options
 * @param {string} options.to - Recipient email address
 * @param {string} options.subject - Email subject
 * @param {string} options.html - HTML content of the email
 * @param {string} options.text - Plain text content of the email
 * @param {Buffer} options.attachment - PDF buffer to attach (optional)
 * @param {string} options.attachmentName - Name of the attachment file (optional)
 * @returns {Promise<Object>} - Result of the email sending operation
 */
export async function sendEmail({
  to,
  subject,
  html,
  text,
  attachment = null,
  attachmentName = 'invoice.pdf'
}) {
  try {
    const transporter = createTransporter();
    
    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to,
      subject,
      html,
      text,
    };

    // Add attachment if provided
    if (attachment) {
      mailOptions.attachments = [
        {
          filename: attachmentName,
          content: attachment,
          contentType: 'application/pdf',
        },
      ];
    }

    const result = await transporter.sendMail(mailOptions);
    
    console.log('Email sent successfully:', result.messageId);
    return {
      success: true,
      messageId: result.messageId,
    };
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error(`Failed to send email: ${error.message}`);
  }
}

/**
 * Send an invoice email with PDF attachment
 * @param {string} to - Recipient email address
 * @param {string} customerName - Customer name
 * @param {string} orderNumber - Order number
 * @param {Buffer} pdfBuffer - PDF invoice buffer
 * @returns {Promise<Object>} - Result of the email sending operation
 */
export async function sendInvoiceEmail(to, customerName, orderNumber, pdfBuffer) {
  const subject = `Invoice for Order #${orderNumber} - Dinar Express Hub`;
  
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333;">Thank you for your order!</h2>
      <p>Dear ${customerName},</p>
      <p>Your order #${orderNumber} has been successfully placed and is being processed.</p>
      <p>Please find your invoice attached to this email.</p>
      <p>If you have any questions about your order, please don't hesitate to contact us.</p>
      <br>
      <p>Best regards,<br>Dinar Express Hub Team</p>
    </div>
  `;

  const text = `
    Thank you for your order!
    
    Dear ${customerName},
    
    Your order #${orderNumber} has been successfully placed and is being processed.
    Please find your invoice attached to this email.
    
    If you have any questions about your order, please don't hesitate to contact us.
    
    Best regards,
    Dinar Express Hub Team
  `;

  return sendEmail({
    to,
    subject,
    html,
    text,
    attachment: pdfBuffer,
    attachmentName: `invoice-${orderNumber}.pdf`,
  });
} 