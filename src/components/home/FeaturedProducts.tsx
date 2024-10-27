import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
  originalPrice: string;
}

type ProductCategories = {
  [key: string]: Product[];
};

const products: ProductCategories = {
  Phones: [
    { id: 1, name: 'Xiaomi 14 CIVI', description: 'Cinematic Vision', image: 'https://i03.appmifile.com/345_operator_in/16/09/2024/2f7dddc78aeba61c1264c958c8119544.jpg?thumb=1&w=1320&f=webp&q=85', price: '₹59,999', originalPrice: '₹79,999' },
    { id: 2, name: 'Redmi Note 13 Pro', description: 'Pro camera', image: 'https://i03.appmifile.com/345_operator_in/16/09/2024/2f7dddc78aeba61c1264c958c8119544.jpg?thumb=1&w=1320&f=webp&q=85', price: '₹22,999', originalPrice: '₹28,999' },
    { id: 3, name: 'Redmi Note 13 5G', description: '5G Speed', image: 'https://i03.appmifile.com/345_operator_in/16/09/2024/2f7dddc78aeba61c1264c958c8119544.jpg?thumb=1&w=1320&f=webp&q=85', price: '₹15,999', originalPrice: '₹20,999' },
    { id: 4, name: 'Xiaomi 14 Ultra', description: 'Ultimate performance', image: 'https://i03.appmifile.com/345_operator_in/16/09/2024/2f7dddc78aeba61c1264c958c8119544.jpg?thumb=1&w=1320&f=webp&q=85', price: '₹99,999', originalPrice: '₹119,999' },
    { id: 5, name: 'Xiaomi 14', description: 'Flagship killer', image: 'https://i03.appmifile.com/345_operator_in/16/09/2024/2f7dddc78aeba61c1264c958c8119544.jpg?thumb=1&w=1320&f=webp&q=85', price: '₹59,999', originalPrice: '₹79,999' },
  ],
  'Smart TV': [
    { id: 6, name: 'Mi QLED TV', description: 'Quantum Dot Display', image: '/placeholder.svg?height=200&width=200', price: '₹54,999', originalPrice: '₹69,999' },
  ],
  Tablets: [
    { id: 7, name: 'Xiaomi Pad 6', description: 'Powerful and portable', image: '/placeholder.svg?height=200&width=200', price: '₹26,999', originalPrice: '₹31,999' },
  ],
  Lifestyle: [
    { id: 8, name: 'Mi Smart Band 6', description: 'Fitness tracker', image: '/placeholder.svg?height=200&width=200', price: '₹3,499', originalPrice: '₹3,999' },
  ],
};

export default function FeaturedProducts(): JSX.Element {
  const [activeTab, setActiveTab] = useState<keyof ProductCategories>('Phones');
  const categories = Object.keys(products) as Array<keyof ProductCategories>;

  return (
    <div className="w-full bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">Featured Products</h1>
        
        <nav className="flex justify-center mb-8">
          <ul className="flex space-x-8">
            {categories.map((category) => (
              <li key={category}>
                <button
                  onClick={() => setActiveTab(category)}
                  className={`text-lg font-medium ${
                    activeTab === category
                      ? "text-orange-500 border-b-2 border-orange-500"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className='bg-white p-4'>
        <div className="bg-gray-100 rounded-lg  overflow-hidden transition-all duration-300  group">
          <div className="md:flex">
            <div className="md:flex-shrink-0 overflow-hidden">
              <img
                className="h-full w-full object-cover md:w-96 transition-all duration-300 group-hover:scale-105"
                src={products[activeTab][0].image}
                alt={products[activeTab][0].name}
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-orange-500 font-semibold">
                New Release
              </div>
              <h2 className="block mt-1 text-3xl leading-tight font-bold text-black">
                {products[activeTab][0].name}
              </h2>
              <p className="mt-2 text-gray-500">{products[activeTab][0].description}</p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="px-6 py-2 text-sm font-medium leading-6 text-center text-white uppercase transition bg-orange-500 rounded ripple  hover:bg-orange-600 focus:outline-none">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products[activeTab].slice(1).map((product) => (
            <div key={product.id} className="bg-gray-100 rounded-lg  overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover transition-all duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                <div className="flex flex-col justify-between items-center">
                  <div className="group-hover:opacity-0 transition-opacity duration-300 flex">
                    <span className="text-gray-950 font-bold flex">From {product.price}</span>
                    <span className="text-gray-400 line-through ml-2">{product.originalPrice}</span>
                  </div>
                  <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 py-1 text-lg font-medium text-white bg-gray-900 rounded-xl hover:bg-gray-950 focus:outline-none">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}