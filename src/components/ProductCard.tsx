
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Product {
  id: number;
  name: string;
  image: string;
  link: string;
  category: string;
  price: string;
  rating: number;
  description: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="text-yellow-400">★</span>);
    }

    if (hasHalfStar) {
      stars.push(<span key="half" className="text-yellow-400">☆</span>);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="text-gray-300">★</span>);
    }

    return stars;
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100 group">
      {/* Product Image */}
      <div className="relative overflow-hidden aspect-square bg-gray-50">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
        )}
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <Badge className="bg-white/90 text-gray-700 font-roboto font-medium px-3 py-1 rounded-full shadow-md">
            {product.category}
          </Badge>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            {renderStars(product.rating)}
          </div>
          <span className="text-sm text-gray-500 font-roboto">({product.rating})</span>
        </div>

        {/* Product Name */}
        <h3 className="font-poppins font-semibold text-gray-900 mb-3 line-clamp-2 text-lg leading-tight">
          {product.name.length > 60 ? `${product.name.substring(0, 60)}...` : product.name}
        </h3>

        {/* Description */}
        <p className="text-gray-600 font-roboto text-sm mb-4 line-clamp-3 leading-relaxed">
          {product.description}
        </p>

        {/* Price */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-2xl font-bold text-green-600 font-poppins">
            {product.price}
          </span>
          <div className="text-xs text-gray-500 font-roboto">
            + delivery charges
          </div>
        </div>

        {/* Buy Button */}
        <Button
          onClick={() => window.open(product.link, '_blank')}
          className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-poppins font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Buy on Amazon →
        </Button>

        {/* Additional Info */}
        <p className="text-xs text-gray-500 text-center mt-3 font-roboto">
          ✓ Fast delivery • ✓ Secure payment • ✓ Return policy
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
