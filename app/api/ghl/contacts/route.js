import { createContact} from '@/lib/ghl';

// Unified error handler
const errorResponse = (message, status = 500) => {
  return Response.json({ error: message }, { status });
};

export async function GET() {
  return errorResponse('GET method not implemented', 405);
}

export async function POST(request) {
  try {
    // Enforce JSON content-type
    const contentType = request.headers.get('content-type');
    if (!contentType?.includes('application/json')) {
      return errorResponse('Invalid content type. Expected JSON.', 415);
    }

    const contactData = await request.json();

    const { firstName, lastName, email, phone } = contactData;

    // Validate required fields
    if (!firstName || !lastName) {
      return errorResponse('First name and last name are required', 400);
    }

    if (!email && !phone) {
      return errorResponse('Either email or phone must be provided', 400);
    }

    // Create contact in GHL
    const newContact = await createContact(contactData);

    return Response.json(newContact, { status: 201 });

  } catch (error) {
    console.error('POST Contact Error:', error);

    const status = error.message.includes('already exists') ? 409 : 500;
    return errorResponse(error.message || 'Failed to create contact', status);
  }
}

