// app/test-order/page.js
import OrderTest from '../../components/OrderTest';

export default function TestOrderPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Order Placement Test
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            This page allows you to test the complete order placement workflow including 
            database storage, PDF invoice generation, and email delivery.
          </p>
        </div>
        
        <OrderTest />
        
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              How it works:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue font-bold">1</span>
                </div>
                <h3 className="font-medium text-gray-800 mb-2">Place Order</h3>
                <p className="text-sm text-gray-600">
                  Fill out the form with customer details and order information
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-600 font-bold">2</span>
                </div>
                <h3 className="font-medium text-gray-800 mb-2">Save to Database</h3>
                <p className="text-sm text-gray-600">
                  Order data is saved to Supabase database with unique order number
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-purple-600 font-bold">3</span>
                </div>
                <h3 className="font-medium text-gray-800 mb-2">Email Invoice</h3>
                <p className="text-sm text-gray-600">
                  PDF invoice is generated and emailed to the customer
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h3 className="font-medium text-yellow-800 mb-2">Important Notes:</h3>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• Make sure your environment variables are configured (see SETUP_INSTRUCTIONS.md)</li>
              <li>• The orders table must exist in your Supabase database</li>
              <li>• SMTP credentials must be properly set up for email functionality</li>
              <li>• Test with a real email address to verify the complete workflow</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 