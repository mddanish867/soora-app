import { useState } from 'react'
import { Package, Truck, CheckCircle } from 'lucide-react'
import Navbar from '../home/Navbar'

interface Order {
    id: string
    date: string
    total: string
    status: 'Processing' | 'In Transit' | 'Delivered'  // Make status a union type of specific values
}

const orders: Order[] = [
  { id: '12345', date: 'October 27, 2024', total: '$1,546.70', status: 'Delivered' },
  { id: '12346', date: 'October 25, 2024', total: '$799.00', status: 'In Transit' },
  { id: '12347', date: 'October 20, 2024', total: '$299.00', status: 'Processing' },
]

export default function OrderHistory(): JSX.Element {
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null)

  const getStatusIcon = (status: Order['status']) => {
    switch (status) {
      case 'Processing':
        return <Package className="h-6 w-6 text-orange-500" />
      case 'In Transit':
        return <Truck className="h-6 w-6 text-blue-500" />
      case 'Delivered':
        return <CheckCircle className="h-6 w-6 text-green-500" />
      default:
        return null
    }
  }

  return (
   <>
   <Navbar/>
   <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Order History</h1>
        <div className="bg-white overflow-hidden sm:rounded-lg">
          <ul className="divide-y divide-gray-200">
            {orders.map((order) => (
              <li key={order.id}>
                <button
                  className="w-full text-left px-4 py-5 sm:px-6 hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                  onClick={() => setSelectedOrder(order.id === selectedOrder ? null : order.id)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-orange-600">Order #{order.id}</p>
                      <p className="text-sm text-gray-500">{order.date}</p>
                    </div>
                    <div className="flex items-center">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {order.status}
                      </span>
                      <span className="ml-2">{getStatusIcon(order.status)}</span>
                    </div>
                  </div>
                  {selectedOrder === order.id && (
                    <div className="mt-4">
                      <div className="flex justify-between items-center mb-4">
                        <div className="w-1/3 text-center">
                          <Package className={`h-6 w-6 mx-auto ${order.status === 'Processing' ? 'text-orange-500' : 'text-gray-400'}`} />
                          <p className="mt-2 text-sm text-gray-500">Processing</p>
                        </div>
                        <div className="w-1/3 text-center">
                          <Truck className={`h-6 w-6 mx-auto ${order.status === 'In Transit' ? 'text-blue-500' : 'text-gray-400'}`} />
                          <p className="mt-2 text-sm text-gray-500">In Transit</p>
                        </div>
                        <div className="w-1/3 text-center">
                          <CheckCircle className={`h-6 w-6 mx-auto ${order.status === 'Delivered' ? 'text-green-500' : 'text-gray-400'}`} />
                          <p className="mt-2 text-sm text-gray-500">Delivered</p>
                        </div>
                      </div>
                      <div className="border-t border-gray-200 pt-4">
                        <p className="text-sm font-medium text-gray-900">Total: {order.total}</p>
                        <button className="mt-2 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-orange-700 bg-orange-100 hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                          View Details
                        </button>
                      </div>
                    </div>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
   </>
  )
}