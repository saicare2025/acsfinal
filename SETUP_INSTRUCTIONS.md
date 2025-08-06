# Order Placement System Setup Instructions

## Overview
This system implements a complete order placement workflow with:
- Order data storage in Supabase
- PDF invoice generation
- Email delivery with PDF attachment

## Required Environment Variables

Add the following to your `.env.local` file:

```env
# Supabase Configuration (already configured)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here

# SMTP Configuration for Email
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password_here
SMTP_FROM=your_email@gmail.com
```

## SMTP Setup Instructions

### For Gmail:
1. Enable 2-Factor Authentication on your Google account
2. Generate an App Password: https://support.google.com/accounts/answer/185833
3. Use the App Password as `SMTP_PASS` (not your regular password)

### For Other Providers:
- **Outlook/Hotmail**: Use `smtp-mail.outlook.com` as host
- **Yahoo**: Use `smtp.mail.yahoo.com` as host
- **Custom SMTP**: Use your provider's SMTP settings

## Supabase Database Setup

Create an `orders` table in your Supabase database with the following structure:

```sql
CREATE TABLE orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  order_number TEXT UNIQUE NOT NULL,
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  total_amount DECIMAL(10,2) NOT NULL,
  currency TEXT DEFAULT 'USD',
  items JSONB NOT NULL,
  notes TEXT,
  order_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_orders_customer_email ON orders(customer_email);
CREATE INDEX idx_orders_order_date ON orders(order_date);
CREATE INDEX idx_orders_status ON orders(status);
```

## API Usage

### Endpoint: `POST /api/place-order`

#### Request Body Example:
```json
{
  "customerName": "John Doe",
  "customerEmail": "john@example.com",
  "totalAmount": 1500.00,
  "currency": "USD",
  "items": [
    {
      "name": "Iraqi Dinar",
      "quantity": 2,
      "price": 750.00
    }
  ],
  "notes": "Optional order notes"
}
```

#### Response Example:
```json
{
  "success": true,
  "orderId": "uuid-here",
  "orderNumber": "ORD-1234567890-123",
  "message": "Order placed successfully",
  "emailSent": true,
  "data": {
    "order": { /* order data */ },
    "emailResult": { /* email result */ }
  }
}
```

## Testing the System

1. **Test API Endpoint**: Use tools like Postman or curl to test the `/api/place-order` endpoint
2. **Check Database**: Verify orders are saved in your Supabase dashboard
3. **Check Email**: Verify PDF invoices are received in the customer's email
4. **Check Logs**: Monitor server logs for any errors

## Production Deployment (Vercel)

1. Add all environment variables to your Vercel project settings
2. Deploy your application
3. Test the complete workflow in production

## Troubleshooting

### Common Issues:

1. **Email not sending**: Check SMTP credentials and ensure App Password is used for Gmail
2. **PDF generation fails**: Ensure `pdf-lib` is properly installed
3. **Database errors**: Verify Supabase connection and table structure
4. **CORS issues**: Ensure proper CORS configuration for your domain

### Error Logs:
Check the browser console and server logs for detailed error messages. The API returns detailed error information in the response.

## Security Notes

- Never commit `.env.local` to version control
- Use environment variables for all sensitive information
- Consider implementing rate limiting for the API endpoint
- Validate all input data (already implemented in the code)
- Use HTTPS in production for secure data transmission 