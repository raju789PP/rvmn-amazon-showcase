
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Main Logo */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-md rounded-full mb-4 p-2">
              <img 
                src="/lovable-uploads/5f91454c-2379-4f5c-982b-d649e1b48dce.png" 
                alt="RVMN Logo" 
                className="w-full h-full object-contain filter brightness-0 invert"
              />
            </div>
            <h1 className="text-6xl md:text-8xl font-bold font-poppins text-white mb-4 tracking-tight">
              RVMN
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full"></div>
          </div>

          {/* Tagline */}
          <h2 className="text-2xl md:text-4xl font-semibold text-white/90 font-poppins mb-6 max-w-4xl mx-auto leading-tight">
            Premium Products for Modern Living
          </h2>
          
          <p className="text-lg md:text-xl text-white/80 font-roboto mb-12 max-w-3xl mx-auto leading-relaxed">
            Discover our curated collection of high-quality products designed to enhance your daily life. 
            From skincare essentials to ergonomic solutions and sports equipment.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              onClick={scrollToProducts}
              className="bg-white text-blue-600 hover:bg-gray-100 font-poppins font-semibold px-8 py-3 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Explore Products
            </Button>
            <Button 
              onClick={() => window.open('https://www.amazon.in/s?k=rvmn&crid=43OL0LCS83SE&sprefix=rvmn%2Caps%2C456&ref=nb_sb_noss_1', '_blank')}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-poppins font-semibold px-8 py-3 rounded-full text-lg transition-all duration-300 transform hover:scale-105 bg-transparent"
            >
              Shop on Amazon
            </Button>
          </div>

          {/* Product Categories Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16">
            {[
              { name: 'Skincare', icon: '🧊' },
              { name: 'Wellness', icon: '🛏️' },
              { name: 'Sports', icon: '🏓' },
              { name: 'Kitchen', icon: '🍳' },
            ].map((category, index) => (
              <div 
                key={category.name}
                className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center transform hover:scale-105 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl mb-2">{category.icon}</div>
                <p className="text-white font-roboto font-medium">{category.name}</p>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="w-8 h-8 text-white/60 mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
