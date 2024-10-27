import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: 'AI Of Tomorrow',
    content: (
      <div className="flex items-center justify-center h-full">
        <h2 className="text-4xl font-bold">IA OF ROW</h2>
      </div>
    ),
  },
  {
    id: 2,
    title: 'Xiaomi HyperOS',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <div className="w-24 h-24 mb-4">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="45" fill="none" stroke="#4299e1" strokeWidth="2" />
            <circle cx="50" cy="50" r="35" fill="#4299e1" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold mb-2">Xiaomi HyperOS</h2>
        <p className="text-lg mb-4">All your needs in one smart ecosystem</p>
        <h3 className="text-4xl font-bold">Human x Car x Home</h3>
      </div>
    ),
  },
  {
    id: 3,
    title: 'Xiaomi Priority Club',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <h2 className="text-2xl font-bold mb-2">Join the</h2>
        <h3 className="text-4xl font-bold mb-2">
          Xiaomi <span className="text-yellow-400">Priority</span>
          <span className="text-yellow-400 border-2 border-yellow-400 rounded-full px-1">Club</span>
        </h3>
        <p className="text-lg mb-4">Now With the All-New</p>
        <p className="text-xl font-bold mb-4">XIAOMI 14 Series</p>
        <p className="text-sm mb-4">CO-ENGINEERED WITH LEICA</p>
        <button className="bg-white text-black px-6 py-2 rounded-full font-semibold">
          Learn More
        </button>
      </div>
    ),
  },
];

export default function ExploreXiaomiSlider() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Explore Xiaomi</h2>
          <div className="flex space-x-4">
            <button
              onClick={prevSlide}
              className="p-2 rounded-xl bg-gray-200 hover:bg-gray-300 transition-colors duration-200"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-xl bg-gray-200 hover:bg-gray-300 transition-colors duration-200"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide) => (
              <div
                key={slide.id}
                className="w-full flex-shrink-0 px-2"
              >
                <div className="bg-black text-white rounded-lg overflow-hidden">
                  <div className="h-80 p-8">{slide.content}</div>
                </div>
                <h3 className="text-xl font-semibold mt-4">{slide.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}