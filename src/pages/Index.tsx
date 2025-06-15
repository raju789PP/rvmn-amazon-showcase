
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const [currentSection, setCurrentSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setCurrentSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header onNavigate={scrollToSection} currentSection={currentSection} />
      
      <section id="home" className="animate-fade-in">
        <Hero />
      </section>
      
      <section id="products" className="py-20">
        <ProductGrid />
      </section>
      
      <section id="about" className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <About />
      </section>
      
      <section id="contact" className="py-20">
        <Contact />
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
