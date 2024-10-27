import {Link} from 'react-router-dom'
import { Check } from 'lucide-react'
import Navbar from '../home/Navbar'

export default function OrderConfirmation() {
  const orderDetails = {
    orderNumber: '12345',
    date: 'October 27, 2024',
    total: '$1,546.70',
    items: [
      { id: 1, name: 'Xiaomi 12', price: 799, quantity: 1 },
      { id: 2, name: 'Redmi Note 11', price: 299, quantity: 2 },
    ],
    shippingAddress: '123 Main St, Anytown, AN 12345',
  }

  return (
   <>
   <Navbar/>
   <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
              Order Confirmation
            </h2>
            <div className="bg-green-100 rounded-full p-2">
              <Check className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
            <div className="text-center mb-6">
              <p className="text-sm font-medium text-gray-500">Order Number</p>
              <p className="text-lg font-bold text-gray-900">{orderDetails.orderNumber}</p>
            </div>
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
              <div>
                <p className="text-sm font-medium text-gray-500">Order Date</p>
                <p className="mt-1 text-sm text-gray-900">{orderDetails.date}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Total Amount</p>
                <p className="mt-1 text-sm text-gray-900">{orderDetails.total}</p>
              </div>
              <div className="sm:col-span-2">
                <p className="text-sm font-medium text-gray-500">Shipping Address</p>
                <p className="mt-1 text-sm text-gray-900">{orderDetails.shippingAddress}</p>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-900">Order Items</h3>
              <div className="mt-4 border-t border-gray-200 pt-4">
                {orderDetails.items.map((item) => (
                  <div key={item.id} className="flex justify-between py-4 border-b">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">${item.price * item.quantity}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="px-4 py-5 sm:px-6">
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-4">
                A confirmation email has been sent to your email address.
              </p>
              <Link
                to="/order-history"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
   </>
  )
}