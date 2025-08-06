// utils/pdfGenerator.js
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

/**
 * Generate a PDF invoice for an order
 * @param {Object} orderData - Order data object
 * @param {string} orderData.orderNumber - Order number
 * @param {string} orderData.customerName - Customer name
 * @param {string} orderData.customerEmail - Customer email
 * @param {Array} orderData.items - Array of order items
 * @param {number} orderData.totalAmount - Total order amount
 * @param {string} orderData.currency - Currency code (default: USD)
 * @param {string} orderData.orderDate - Order date
 * @returns {Promise<Buffer>} - PDF buffer
 */
export async function generateInvoicePDF(orderData) {
  try {
    // Create a new PDF document
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([595.28, 841.89]); // A4 size
    const { width, height } = page.getSize();

    // Embed the standard font
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

    // Define colors
    const primaryColor = rgb(0.2, 0.2, 0.2);
    const secondaryColor = rgb(0.4, 0.4, 0.4);
    const accentColor = rgb(0.1, 0.3, 0.6);

    // Header
    page.drawText('DINAR EXPRESS HUB', {
      x: 50,
      y: height - 80,
      size: 24,
      font: boldFont,
      color: accentColor,
    });

    page.drawText('INVOICE', {
      x: 50,
      y: height - 110,
      size: 18,
      font: boldFont,
      color: primaryColor,
    });

    // Invoice details
    const leftColumn = 50;
    const rightColumn = 350;
    let yPosition = height - 160;

    // Order information
    page.drawText('Order Number:', {
      x: leftColumn,
      y: yPosition,
      size: 12,
      font: boldFont,
      color: primaryColor,
    });

    page.drawText(orderData.orderNumber, {
      x: leftColumn + 100,
      y: yPosition,
      size: 12,
      font: font,
      color: primaryColor,
    });

    yPosition -= 25;

    page.drawText('Order Date:', {
      x: leftColumn,
      y: yPosition,
      size: 12,
      font: boldFont,
      color: primaryColor,
    });

    page.drawText(orderData.orderDate || new Date().toLocaleDateString(), {
      x: leftColumn + 100,
      y: yPosition,
      size: 12,
      font: font,
      color: primaryColor,
    });

    yPosition -= 25;

    // Customer information
    page.drawText('Customer Name:', {
      x: leftColumn,
      y: yPosition,
      size: 12,
      font: boldFont,
      color: primaryColor,
    });

    page.drawText(orderData.customerName, {
      x: leftColumn + 100,
      y: yPosition,
      size: 12,
      font: font,
      color: primaryColor,
    });

    yPosition -= 25;

    page.drawText('Customer Email:', {
      x: leftColumn,
      y: yPosition,
      size: 12,
      font: boldFont,
      color: primaryColor,
    });

    page.drawText(orderData.customerEmail, {
      x: leftColumn + 100,
      y: yPosition,
      size: 12,
      font: font,
      color: primaryColor,
    });

    yPosition -= 40;

    // Items table header
    const tableY = yPosition;
    page.drawText('Item', {
      x: leftColumn,
      y: tableY,
      size: 12,
      font: boldFont,
      color: primaryColor,
    });

    page.drawText('Quantity', {
      x: leftColumn + 200,
      y: tableY,
      size: 12,
      font: boldFont,
      color: primaryColor,
    });

    page.drawText('Price', {
      x: leftColumn + 300,
      y: tableY,
      size: 12,
      font: boldFont,
      color: primaryColor,
    });

    page.drawText('Total', {
      x: leftColumn + 400,
      y: tableY,
      size: 12,
      font: boldFont,
      color: primaryColor,
    });

    yPosition -= 30;

    // Draw line under header
    page.drawLine({
      start: { x: leftColumn, y: yPosition + 10 },
      end: { x: width - 50, y: yPosition + 10 },
      thickness: 1,
      color: secondaryColor,
    });

    yPosition -= 20;

    // Items
    if (orderData.items && Array.isArray(orderData.items)) {
      for (const item of orderData.items) {
        page.drawText(item.name || 'Product', {
          x: leftColumn,
          y: yPosition,
          size: 10,
          font: font,
          color: primaryColor,
        });

        page.drawText(item.quantity?.toString() || '1', {
          x: leftColumn + 200,
          y: yPosition,
          size: 10,
          font: font,
          color: primaryColor,
        });

        page.drawText(`${orderData.currency || 'USD'} ${item.price || 0}`, {
          x: leftColumn + 300,
          y: yPosition,
          size: 10,
          font: font,
          color: primaryColor,
        });

        const itemTotal = (item.quantity || 1) * (item.price || 0);
        page.drawText(`${orderData.currency || 'USD'} ${itemTotal.toFixed(2)}`, {
          x: leftColumn + 400,
          y: yPosition,
          size: 10,
          font: font,
          color: primaryColor,
        });

        yPosition -= 20;
      }
    } else {
      // Single item fallback
      page.drawText('Product', {
        x: leftColumn,
        y: yPosition,
        size: 10,
        font: font,
        color: primaryColor,
      });

      page.drawText('1', {
        x: leftColumn + 200,
        y: yPosition,
        size: 10,
        font: font,
        color: primaryColor,
      });

      page.drawText(`${orderData.currency || 'USD'} ${orderData.totalAmount || 0}`, {
        x: leftColumn + 300,
        y: yPosition,
        size: 10,
        font: font,
        color: primaryColor,
      });

      page.drawText(`${orderData.currency || 'USD'} ${orderData.totalAmount || 0}`, {
        x: leftColumn + 400,
        y: yPosition,
        size: 10,
        font: font,
        color: primaryColor,
      });

      yPosition -= 20;
    }

    yPosition -= 20;

    // Draw line above total
    page.drawLine({
      start: { x: leftColumn, y: yPosition + 10 },
      end: { x: width - 50, y: yPosition + 10 },
      thickness: 1,
      color: secondaryColor,
    });

    yPosition -= 20;

    // Total
    page.drawText('Total:', {
      x: leftColumn + 300,
      y: yPosition,
      size: 14,
      font: boldFont,
      color: accentColor,
    });

    page.drawText(`${orderData.currency || 'USD'} ${orderData.totalAmount?.toFixed(2) || '0.00'}`, {
      x: leftColumn + 400,
      y: yPosition,
      size: 14,
      font: boldFont,
      color: accentColor,
    });

    yPosition -= 60;

    // Footer
    page.drawText('Thank you for your business!', {
      x: leftColumn,
      y: yPosition,
      size: 12,
      font: font,
      color: secondaryColor,
    });

    yPosition -= 20;

    page.drawText('Dinar Express Hub', {
      x: leftColumn,
      y: yPosition,
      size: 10,
      font: font,
      color: secondaryColor,
    });

    // Convert to buffer
    const pdfBytes = await pdfDoc.save();
    return Buffer.from(pdfBytes);
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw new Error(`Failed to generate PDF: ${error.message}`);
  }
} 