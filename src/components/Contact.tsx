
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-bold font-poppins text-gray-900 mb-4">
          Get In Touch
        </h2>
        <p className="text-xl text-gray-600 font-roboto max-w-3xl mx-auto">
          Have questions about our products? We're here to help you find the perfect solution
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Contact Info */}
        <div className="animate-fade-in">
          <h3 className="text-3xl font-bold font-poppins text-gray-900 mb-8">
            Let's Connect
          </h3>
          
          <div className="space-y-8">
            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xl">📧</span>
              </div>
              <div>
                <h4 className="font-poppins font-semibold text-gray-900 mb-2">Email Us</h4>
                <p className="text-gray-600 font-roboto mb-2">
                  For product inquiries, support, or partnership opportunities
                </p>
                <a 
                  href="mailto:rvmnecom2025@gmail.com"
                  className="text-blue-600 hover:text-blue-700 font-roboto font-medium transition-colors duration-300"
                >
                  rvmnecom2025@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xl">📞</span>
              </div>
              <div>
                <h4 className="font-poppins font-semibold text-gray-900 mb-2">Call Us</h4>
                <p className="text-gray-600 font-roboto mb-2">
                  Speak directly with our customer service team
                </p>
                <a 
                  href="tel:+919392012191"
                  className="text-blue-600 hover:text-blue-700 font-roboto font-medium transition-colors duration-300"
                >
                  +91 93920121911
                </a>
              </div>
            </div>

            {/* Amazon Store */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xl">🛒</span>
              </div>
              <div>
                <h4 className="font-poppins font-semibold text-gray-900 mb-2">Amazon Store</h4>
                <p className="text-gray-600 font-roboto mb-3">
                  Visit our official Amazon store for the complete product catalog
                </p>
                <Button 
                  onClick={() => window.open('https://www.amazon.in/s?k=rvmn&crid=43OL0LCS83SE&sprefix=rvmn%2Caps%2C456&ref=nb_sb_noss_1', '_blank')}
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-poppins font-semibold px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Visit Store →
                </Button>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="mt-12 p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl">
            <h4 className="font-poppins font-semibold text-gray-900 mb-4">Business Hours</h4>
            <div className="space-y-2 font-roboto text-gray-600">
              <div className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span>10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="animate-fade-in">
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold font-poppins text-gray-900 mb-6 text-center">
              Send us a Message
            </h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-roboto font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-300 font-roboto"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-roboto font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-300 font-roboto"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label className="block text-sm font-roboto font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-300 font-roboto"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label className="block text-sm font-roboto font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-300 font-roboto resize-none"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>
              
              <Button 
                onClick={() => window.location.href = 'mailto:rvmnecom2025@gmail.com'}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-poppins font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
