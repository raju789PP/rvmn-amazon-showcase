
const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-bold font-poppins text-gray-900 mb-4">
          About RVMN
        </h2>
        <p className="text-xl text-gray-600 font-roboto max-w-3xl mx-auto">
          Committed to bringing you premium quality products that enhance your daily life
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Content */}
        <div className="animate-fade-in">
          <h3 className="text-3xl font-bold font-poppins text-gray-900 mb-6">
            Our Mission
          </h3>
          <p className="text-lg text-gray-600 font-roboto mb-6 leading-relaxed">
            At RVMN, we believe that everyone deserves access to premium quality products 
            that make a real difference in their daily lives. We carefully curate each 
            product in our collection to ensure it meets our high standards of quality, 
            functionality, and value.
          </p>
          <p className="text-lg text-gray-600 font-roboto mb-8 leading-relaxed">
            From innovative skincare solutions and wellness products to sports equipment 
            and kitchen essentials, every RVMN product is selected with your lifestyle 
            and well-being in mind.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: "🎯",
                title: "Quality First",
                description: "Every product is carefully tested and selected for superior quality"
              },
              {
                icon: "🚀",
                title: "Innovation",
                description: "We bring you the latest innovations in lifestyle products"
              },
              {
                icon: "💯",
                title: "Customer Focused",
                description: "Your satisfaction and well-being are our top priorities"
              },
              {
                icon: "🌟",
                title: "Premium Experience",
                description: "Exceptional products that deliver exceptional results"
              }
            ].map((feature, index) => (
              <div 
                key={feature.title}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h4 className="font-poppins font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600 font-roboto text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Element */}
        <div className="animate-fade-in">
          <div className="relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl transform rotate-3"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-3xl transform -rotate-3"></div>
            
            {/* Content */}
            <div className="relative bg-white rounded-3xl p-8 shadow-xl">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-white font-poppins">R</span>
                </div>
                <h3 className="text-2xl font-bold font-poppins text-gray-900 mb-4">
                  Why Choose RVMN?
                </h3>
                <p className="text-gray-600 font-roboto mb-6">
                  We're not just another product seller. We're your partners in creating 
                  a better lifestyle through carefully curated, premium products.
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 font-poppins">100+</div>
                    <div className="text-xs text-gray-500 font-roboto">Happy Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600 font-poppins">4.5★</div>
                    <div className="text-xs text-gray-500 font-roboto">Average Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 font-poppins">24/7</div>
                    <div className="text-xs text-gray-500 font-roboto">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
