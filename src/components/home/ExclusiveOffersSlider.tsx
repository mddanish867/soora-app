import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const offers = [
  {
    id: 1,
    title: 'Smart Bundles',
    description: 'Buy More ! Save Up to 45% Off',
    image: 'https://i03.appmifile.com/763_operator_in/16/10/2024/762bb4851af599bac79e578be5713656.png?thumb=1&w=840&f=webp&q=85',
    learnMoreText: 'Learn More',
  },
  {
    id: 2,
    title: 'Bestselling Smartphones',
    description: 'Elevate Your SmartPhone Experience',
    image: 'https://i03.appmifile.com/303_operator_in/16/10/2024/9798d78e76c33b46c6046a9e29b9c8ad.png?thumb=1&w=840&f=webp&q=85',
    learnMoreText: 'Shop Now',
  },
  {
    id: 3,
    title: 'Smart TV',
    description: 'Biggest deals on Smart TVs',
    image: 'https://i03.appmifile.com/493_operator_in/16/10/2024/d8251da6d598071f67fd7f78ae9e51a8.png?thumb=1&w=840&f=webp&q=85',
    learnMoreText: 'Explore',
  },
];

export default function ExclusiveOffersSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % offers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + offers.length) % offers.length);
  };

  return (
    <div className="w-full bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Exclusive Offers</h2>
          <div className="flex space-x-4">
            <button
              onClick={prevSlide}
              className="p-2 rounded-xl bg-gray-200  hover:bg-gray-100 transition-colors duration-200"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-xl bg-gray-200  hover:bg-gray-100 transition-colors duration-200"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="flex space-x-6 overflow-hidden">
          {offers.map((offer, index) => (
            <div
              key={offer.id}
              className={`w-full flex-shrink-0 transition-all duration-300 ease-in-out transform ${
                index === currentIndex ? 'scale-100 opacity-100' : 'scale-95 opacity-50'
              }`}
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-orange-500 text-white px-2 py-1 rounded-md text-sm font-semibold">
                    DIWALI WITH mi
                  </div>
                </div>
                <div className="p-6 flex-col">
                  <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
                  <p className="text-gray-600 group-hover:opacity-0 transition-opacity duration-300">
                    {offer.description}
                  </p>
                  <button className="text-lg mt-4 px-4 py-1 bg-gray-950 text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {offer.learnMoreText}
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