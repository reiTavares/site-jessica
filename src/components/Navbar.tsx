import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { supabase } from "@/integrations/supabase/client";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logoUrl = supabase.storage.from('images').getPublicUrl('logo jessica.svg').data.publicUrl;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logoUrl} alt="Logo Jessica" className="h-12" />
          </Link>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-primary"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-xl font-medium text-primary hover:text-secondary">Home</Link>
            <a href="#servicos" className="text-xl font-medium text-primary hover:text-secondary">Serviços</a>
            <a href="#simule-agora" className="text-xl font-medium text-primary hover:text-secondary">Simule Agora</a>
            <a href="#contato" className="text-xl font-medium text-primary hover:text-secondary">Contato</a>
          </nav>

          {/* Contact button for desktop */}
          <div className="hidden md:flex items-center">
            <a 
              href="tel:+5561996068727" 
              className="flex items-center text-xl font-medium text-primary hover:text-secondary mr-6"
            >
              <Phone className="mr-2" size={24} />
              (61) 9 9606-8727
            </a>
            <a href="#simule-agora" className="btn-primary">
              Simule Agora
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4">
          <nav className="flex flex-col space-y-4 container-custom">
            <Link 
              to="/" 
              className="text-xl font-medium text-primary hover:text-secondary px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <a 
              href="#servicos" 
              className="text-xl font-medium text-primary hover:text-secondary px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Serviços
            </a>
            <a 
              href="#simule-agora" 
              className="text-xl font-medium text-primary hover:text-secondary px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Simule Agora
            </a>
            <a 
              href="#contato" 
              className="text-xl font-medium text-primary hover:text-secondary px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </a>
            <a 
              href="tel:+5561996068727" 
              className="flex items-center text-xl font-medium text-primary hover:text-secondary px-4 py-2"
            >
              <Phone className="mr-2" size={24} />
              (61) 9 9606-8727
            </a>
            <a 
              href="#simule-agora" 
              className="btn-primary mx-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Simule Agora
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
