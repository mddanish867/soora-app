import { Heart, ShoppingCart } from 'lucide-react'
import Navbar from '../home/Navbar'

export default function Favorites() {
  const favoriteItems = [
    { id: 1, name: 'Xiaomi 12', price: 799, image: 'https://i03.appmifile.com/763_operator_in/16/10/2024/762bb4851af599bac79e578be5713656.png?thumb=1&w=840&f=webp&q=85' },
    { id: 2, name: 'Redmi Note 11', price: 299, image: 'https://i03.appmifile.com/763_operator_in/16/10/2024/762bb4851af599bac79e578be5713656.png?thumb=1&w=840&f=webp&q=85' },
    { id: 3, name: 'Mi Smart Band 6', price: 49, image: 'https://i03.appmifile.com/763_operator_in/16/10/2024/762bb4851af599bac79e578be5713656.png?thumb=1&w=840&f=webp&q=85' },
    { id: 4, name: 'Mi Robot Vacuum', price: 399, image: 'https://i03.appmifile.com/763_operator_in/16/10/2024/762bb4851af599bac79e578be5713656.png?thumb=1&w=840&f=webp&q=85' },
  ]

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold mb-8">Your Favorites</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favoriteItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg overflow-hidden">
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="font-semibold text-lg mb-2">{item.name}</h2>
                <p className="text-gray-600 mb-4">${item.price}</p>
                <div className="flex justify-between items-center">
                  <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-300 flex items-center">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </button>
                  <button className="text-gray-500 hover:text-red-500 transition duration-300">
                    <Heart className="h-6 w-6 fill-current" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}