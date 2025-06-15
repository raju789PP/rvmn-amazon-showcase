
import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';

const ProductGrid = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const products = [
    {
      id: 1,
      name: "RVMN® Ice Roller For Face, EYES,Neck and Body | For Puffy Eyes and Facial Skin Care, Ice Facial Cube (Pack of 2)",
      image: "https://m.media-amazon.com/images/I/61mSJrpMayL._SX679_.jpg",
      link: "https://www.amazon.in/dp/B0F9PRHR1B",
      category: "Massager",
      price: "₹599",
      rating: 4.5,
      description: "Professional ice roller for face and body massage. Reduces puffiness, improves circulation, and provides a refreshing skincare experience."
    },
    {
      id: 2,
      name: "RVMN Orthopedic Memory Foam Pillows Support for Pressure Relief, Pain Relief, Sleep Posture Correction and Spine Alignment Pillow, Ergonomic Cervical Pillow Set of 1",
      image: "https://m.media-amazon.com/images/I/61gvXeCL6bL._SX569_.jpg",
      link: "https://www.amazon.in/dp/B0F2FQJHFZ",
      category: "Body positioner",
      price: "₹1,299",
      rating: 4.3,
      description: "Ergonomic memory foam pillow designed for optimal spine alignment and pressure relief. Perfect for neck and shoulder pain relief."
    },
    {
      id: 3,
      name: "RVMN Premium Pickleball Balls Set Outdoor Games - (Pack of 2 Pickle Ball, 40+ Holes, Green) Made with Light Durable | Premium Material | Pickleballs with 40 Precision Holes, Active Bounce Padel Balls",
      image: "https://m.media-amazon.com/images/I/4165XtjXm2L.jpg",
      link: "https://www.amazon.in/dp/B0F9KNQ5TR",
      category: "Games & Sports",
      price: "₹349",
      rating: 4.7,
      description: "High-quality pickleball balls with 40 precision holes for optimal bounce and durability. Perfect for outdoor games and tournaments."
    },
    {
      id: 4,
      name: "RVMN Silicone Baking Mat Roti mat Silicone mat for Kitchen Chapati mat Atta Kneading Mat Non Stick Fondant Dough Rolling mat Cake Pad Cooking (Blue,Green,Pink)",
      image: "https://m.media-amazon.com/images/I/618qJ8aQJfL._SX569_.jpg",
      link: "https://www.amazon.in/dp/B0F9LFB3W3",
      category: "Home & Kitchen",
      price: "₹399",
      rating: 4.4,
      description: "Non-stick silicone baking mat perfect for rolling dough, kneading atta, and baking. Available in multiple colors for easy identification."
    }
  ];

  const categories = ['All', 'Massager', 'Body positioner', 'Games & Sports', 'Home & Kitchen'];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-bold font-poppins text-gray-900 mb-4">
          Our Premium Products
        </h2>
        <p className="text-xl text-gray-600 font-roboto max-w-3xl mx-auto">
          Carefully selected products designed to enhance your lifestyle. All available on Amazon with fast delivery.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6"></div>
      </div>

      {/* Search and Filter Section */}
      <div className="mb-12 animate-scale-in">
        <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search Bar */}
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 w-full border-2 border-gray-200 rounded-xl focus:border-blue-500 font-roboto text-base"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={`rounded-full px-6 py-2 font-roboto font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                      : 'hover:bg-gray-50 text-gray-700 border-gray-300'
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredProducts.map((product, index) => (
          <div
            key={product.id}
            className="animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-20 animate-fade-in">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-poppins font-semibold text-gray-700 mb-2">No products found</h3>
          <p className="text-gray-500 font-roboto">Try adjusting your search or filter criteria</p>
        </div>
      )}

      {/* Amazon Store CTA */}
      <div className="text-center mt-16 animate-scale-in">
        <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-8 border border-orange-200">
          <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-4">
            Want to see more products?
          </h3>
          <p className="text-gray-600 font-roboto mb-6 max-w-2xl mx-auto">
            Visit our complete Amazon store for the full collection and exclusive deals!
          </p>
          <Button 
            onClick={() => window.open('https://www.amazon.in/s?k=rvmn&crid=43OL0LCS83SE&sprefix=rvmn%2Caps%2C456&ref=nb_sb_noss_1', '_blank')}
            className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-poppins font-semibold px-8 py-3 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Browse Amazon Store →
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
