import { Facebook, Twitter, Instagram } from "lucide-react";


const Footer = () => {
  return (
    <>
    <footer className="bg-gray-800 text-white py-12">
<div className="container mx-auto px-4">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    <div>
      <h3 className="text-lg font-semibold mb-4">Shop and Learn</h3>
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-orange-500">Xiaomi Phones</a></li>
        <li><a href="#" className="hover:text-orange-500">Redmi Phones</a></li>
        <li><a href="#" className="hover:text-orange-500">TV & Audio</a></li>
        <li><a href="#" className="hover:text-orange-500">Lifestyle</a></li>
      </ul>
    </div>
    <div>
      <h3 className="text-lg font-semibold mb-4">Support</h3>
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-orange-500">Contact Us</a></li>
        <li><a href="#" className="hover:text-orange-500">User Guide</a></li>
        <li><a href="#" className="hover:text-orange-500">Warranty</a></li>
        <li><a href="#" className="hover:text-orange-500">Service Centers</a></li>
      </ul>
    </div>
    <div>
      <h3 className="text-lg font-semibold mb-4">About Us</h3>
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-orange-500">Xiaomi</a></li>
        <li><a href="#" className="hover:text-orange-500">Privacy Policy</a></li>
        <li><a href="#" className="hover:text-orange-500">Integrity & Compliance</a></li>
        <li><a href="#" className="hover:text-orange-500">Xiaomi Blog</a></li>
      </ul>
    </div>
    <div>
      <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
      <div className="flex space-x-4">
        <a href="#" className="hover:text-orange-500"><Facebook /></a>
        <a href="#" className="hover:text-orange-500"><Twitter /></a>
        <a href="#" className="hover:text-orange-500"><Instagram /></a>
      </div>
    </div>
  </div>
  <div className="mt-8 pt-8 border-t border-gray-700 text-center">
    <p>&copy; 2024 Xiaomi. All rights reserved.</p>
  </div>
</div>
</footer>
    </>
  )
}

export default Footer