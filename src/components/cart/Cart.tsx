import { Minus, Plus, X } from 'lucide-react'
import Navbar from '../home/Navbar'
import { useNavigate } from 'react-router-dom'

export default function Cart() {
    const navigate = useNavigate();
  const cartItems = [
    { id: 1, name: 'Xiaomi 12', price: 799, quantity: 1, image: 'https://i03.appmifile.com/763_operator_in/16/10/2024/762bb4851af599bac79e578be5713656.png?thumb=1&w=840&f=webp&q=85' },
    { id: 2, name: 'Redmi Note 11', price: 299, quantity: 2, image: 'https://i03.appmifile.com/763_operator_in/16/10/2024/762bb4851af599bac79e578be5713656.png?thumb=1&w=840&f=webp&q=85' },
  ]

  const handleCheckout = () => {
    navigate("/checkout")
  }
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold mb-8">Your Cart</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg  p-4 mb-4 flex items-center">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover mr-4" />
                <div className="flex-grow">
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="text-gray-600">${item.price}</p>
                  <div className="flex items-center mt-2">
                    <button className="text-gray-500 hover:text-orange-500">
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button className="text-gray-500 hover:text-orange-500">
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <button className="text-gray-500 hover:text-orange-500">
                  <X className="h-6 w-6" />
                </button>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>$1,397</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping</span>
              <span>$10</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Tax</span>
              <span>$139.70</span>
            </div>
            <div className="border-t pt-2 mt-2">
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>$1,546.70</span>
              </div>
            </div>
            <button
            onClick={handleCheckout}
            className="w-full bg-orange-500 text-white py-2 rounded-lg mt-4 hover:bg-orange-600 transition duration-300">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}