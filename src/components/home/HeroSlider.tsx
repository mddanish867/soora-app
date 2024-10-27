import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    id: 1,
    title: 'Xiaomi 12 Series',
    subtitle: 'Master Every Scene',
    image: 'https://i03.appmifile.com/345_operator_in/16/09/2024/2f7dddc78aeba61c1264c958c8119544.jpg?thumb=1&w=1320&f=webp&q=85',
    cta: 'Learn More',
  },
  {
    id: 2,
    title: 'Redmi Note 11 Pro',
    subtitle: 'Rise to the Challenge',
    image: 'https://i03.appmifile.com/345_operator_in/16/09/2024/2f7dddc78aeba61c1264c958c8119544.jpg?thumb=1&w=1320&f=webp&q=85',
    cta: 'Buy Now',
  },
  {
    id: 3,
    title: 'Mi Smart Band 6',
    subtitle: 'It is Time to Level Up',
    image: 'https://i03.appmifile.com/345_operator_in/16/09/2024/2f7dddc78aeba61c1264c958c8119544.jpg?thumb=1&w=1320&f=webp&q=85',
    cta: 'Discover',
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-[60vh] md:h-[80vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
              <p className="text-xl md:text-2xl mb-8">{slide.subtitle}</p>
              <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition duration-300">
                {slide.cta}
              </button>
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition duration-300"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition duration-300"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-orange-500' : 'bg-white bg-opacity-50'
            }`}
          ></button>
        ))}
      </div>
    </div>
  )
}