
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl font-poppins">R</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-poppins">RVMN</h3>
                <p className="text-gray-400 text-sm font-roboto">Premium Products</p>
              </div>
            </div>
            <p className="text-gray-300 font-roboto mb-6 max-w-md leading-relaxed">
              Your trusted partner for premium lifestyle products. From skincare essentials 
              to wellness solutions, we bring you quality products that enhance your daily life.
            </p>
            <Button 
              onClick={() => window.open('https://www.amazon.in/s?k=rvmn&crid=43OL0LCS83SE&sprefix=rvmn%2Caps%2C456&ref=nb_sb_noss_1', '_blank')}
              className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-poppins font-semibold px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Shop on Amazon →
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 font-roboto">
              <li>
                <button 
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Products
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4 font-roboto">
              <div>
                <p className="text-gray-400 text-sm mb-1">Email</p>
                <a 
                  href="mailto:rvmnecom2025@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  rvmnecom2025@gmail.com
                </a>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Phone</p>
                <a 
                  href="tel:+919392012191"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  +91 93920121911
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Product Categories */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <h4 className="text-lg font-poppins font-semibold mb-4 text-center">Our Product Categories</h4>
          <div className="flex flex-wrap justify-center gap-4">
            {['Skincare & Massage', 'Wellness & Sleep', 'Sports & Games', 'Kitchen Essentials'].map((category) => (
              <span 
                key={category}
                className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm font-roboto hover:bg-gray-700 transition-colors duration-300"
              >
                {category}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 font-roboto text-sm mb-4 md:mb-0">
            © {currentYear} RVMN. All rights reserved. | Premium Products for Modern Living
          </p>
          <div className="flex items-center space-x-6">
            <span className="text-gray-400 font-roboto text-sm">Powered by</span>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-orange-500 rounded"></div>
              <span className="text-gray-300 font-roboto text-sm font-medium">Amazon</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
