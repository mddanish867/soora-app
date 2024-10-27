import { useState } from "react";
import { Menu, Search, ShoppingCart, Heart, User } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </button>
            <Link to="/">
              <img
                src="https://i03.appmifile.com/763_operator_in/16/10/2024/762bb4851af599bac79e578be5713656.png?thumb=1&w=840&f=webp&q=85"
                alt="Xiaomi Logo"
                className="h-8"
              />
            </Link>
          </div>
          <nav
            className={`
            fixed inset-0 z-20 bg-white transform transition-transform duration-300 ease-in-out
            ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
            md:static md:bg-transparent md:transform-none md:flex md:space-x-6
          `}
          >
            <div className="flex flex-col space-y-4 p-4 md:flex-row md:space-y-0 md:space-x-6 md:p-0">
              <Link to="/profile-settings" className="hover:text-orange-500">
                Phones
              </Link>
              <Link to="/tv-audio" className="hover:text-orange-500">
                TV & Audio
              </Link>
              <Link to="/lifestyle" className="hover:text-orange-500">
                Lifestyle
              </Link>
              <Link to="/support" className="hover:text-orange-500">
                Support
              </Link>
            </div>
          </nav>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="hover:text-orange-500"
              aria-label="Search"
            >
              <Search className="h-6 w-6" />
            </button>
            <Link to="/cart" className="hover:text-orange-500">
              <ShoppingCart className="h-6 w-6" />
            </Link>
            <Link to="/favorites" className="hover:text-orange-500">
              <Heart className="h-6 w-6" />
            </Link>
            <Link to="/auth" className="hover:text-orange-500">
              <User className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
      {isSearchOpen && (
        <div className="fixed inset-0 z-30 bg-white p-4">
          <div className="container mx-auto flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border-b-2 border-gray-300 py-2 px-4 focus:border-orange-500 focus:outline-none"
            />
            <button
              onClick={() => setIsSearchOpen(false)}
              className="ml-4 text-gray-500 hover:text-orange-500"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
