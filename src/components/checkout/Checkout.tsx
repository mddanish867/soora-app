import { useState } from 'react'
import Navbar from '../home/Navbar'
import { useNavigate } from 'react-router-dom'

export default function Checkout() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1)

  const cartItems = [
    { id: 1, name: 'Xiaomi 12', price: 799, quantity: 1 },
    { id: 2, name: 'Redmi Note 11', price: 299, quantity: 2 },
  ]
const handleOrderConfirmation = () =>{
  navigate("/order-confirmation")
}
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold mb-8 text-center">Checkout</h1>
        <div className="flex justify-center mb-8">
          <div className="flex items-center">
            <div className={`w-8 h-8 rounded-full ${step >= 1 ? 'bg-orange-500' : 'bg-gray-300'} flex items-center justify-center text-white font-bold`}>1</div>
            <div className={`w-24 h-1 ${step >= 2 ? 'bg-orange-500' : 'bg-gray-300'}`}></div>
            <div className={`w-8 h-8 rounded-full ${step >= 2 ? 'bg-orange-500' : 'bg-gray-300'} flex items-center justify-center text-white font-bold`}>2</div>
            <div className={`w-24 h-1 ${step >= 3 ? 'bg-orange-500' : 'bg-gray-300'}`}></div>
            <div className={`w-8 h-8 rounded-full ${step >= 3 ? 'bg-orange-500' : 'bg-gray-300'} flex items-center justify-center text-white font-bold`}>3</div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            {step === 1 && (
              <div className="bg-white rounded-lg  p-6">
                <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
                <form onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                      <input type="text" id="firstName" name="firstName" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                      <input type="text" id="lastName" name="lastName" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                    <input type="text" id="address" name="address" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
                      <input type="text" id="city" name="city" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500" />
                    </div>
                    <div>
                      <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">ZIP Code</label>
                      <input type="text" id="zipCode" name="zipCode" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500" />
                    </div>
                  </div>
                  <button 
                  onClick={handleOrderConfirmation}
                  type="submit" 
                  className="w-full bg-orange-500 text-white py-2 px-4 rounded-md mt-6 hover:bg-orange-600 transition duration-300">Continue to Payment</button>
                </form>
              </div>
            )}
            {step === 2 && (
              <div className="bg-white rounded-lg  p-6">
                <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
                <form onSubmit={(e) => { e.preventDefault(); setStep(3); }}>
                  <div>
                    <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                    <input type="text" id="cardNumber" name="cardNumber" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                      <label htmlFor="expirationDate" className="block text-sm font-medium text-gray-700 mb-1">Expiration Date</label>
                      <input type="text" id="expirationDate" name="expirationDate" placeholder="MM/YY" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500" />
                    </div>
                    <div>
                      <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                      <input type="text" id="cvv" name="cvv" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label htmlFor="nameOnCard" className="block text-sm font-medium text-gray-700 mb-1">Name on Card</label>
                    <input type="text" id="nameOnCard" name="nameOnCard" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500" />
                  </div>
                  <button type="submit" className="w-full bg-orange-500 text-white py-2 px-4 rounded-md mt-6 hover:bg-orange-600 transition duration-300">Place Order</button>
                </form>
              </div>
            )}
            {step === 3 && (
              <div className="bg-white rounded-lg  p-6">
                <h2 className="text-xl font-semibold mb-4">Order Confirmation</h2>
                <p className="text-green-600 mb-4">Your order has been placed successfully!</p>
                <p className="mb-2">Order Number: #12345</p>
                <p className="mb-4">Thank you for shopping with Xiaomi.</p>
                <button onClick={() => window.location.href = '/'} className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition duration-300">Continue Shopping</button>
              </div>
            )}
          </div>
          <div>
            <div className="bg-white rounded-lg  p-6">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center mb-2">
                  <span>{item.name} x {item.quantity}</span>
                  <span>${item.price * item.quantity}</span>
                </div>
              ))}
              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between items-center mb-2">
                  <span>Subtotal</span>
                  <span>$1,397</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span>Shipping</span>
                  <span>$10</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span>Tax</span>
                  <span>$139.70</span>
                </div>
                <div className="flex justify-between items-center font-semibold text-lg mt-4">
                  <span>Total</span>
                  <span>$1,546.70</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}