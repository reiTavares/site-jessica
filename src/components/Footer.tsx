import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contato" className="bg-primary text-white">
      <div className="container-custom py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Entre em Contato</h3>
            <ul className="space-y-4 text-xl">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <a href="https://wa.me/5561996068727" target="_blank" rel="noopener noreferrer" className="hover:text-secondary">
                  (61) 99606-8727
                </a>
              </li>
              
              <li className="flex items-center">
                <Phone className="mr-3" size={24} />
                <a href="tel:+5561996068727" className="hover:text-secondary">
                  (61) 99606-8727
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3" size={24} />
                <a href="mailto:contato@maisemprestimos.com.br" className="hover:text-secondary">
                  contato@maisemprestimos.com.br
                </a>
              </li>
            </ul>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Links Úteis</h3>
            <ul className="space-y-3 text-xl">
              <li>
                <Link to="/" className="hover:text-secondary">Home</Link>
              </li>
              <li>
                <a href="#quem-somos" className="hover:text-secondary">Quem Somos</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-secondary">Serviços</a>
              </li>
              <li>
                <a href="#simule-agora" className="hover:text-secondary">Simule Agora</a>
              </li>
              <li>
                <Link to="/politicas-de-privacidade" className="hover:text-secondary">
                  Políticas de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/termos-de-uso" className="hover:text-secondary">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/profile.php?id=61575296291015" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-primary p-3 rounded-full hover:bg-secondary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={28} />
              </a>
              <a 
                href="https://instagram.com/emprestimo_mais/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-primary p-3 rounded-full hover:bg-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={28} />
              </a>
              <a 
                href="https://wa.me/5561996068727" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-primary p-3 rounded-full hover:bg-secondary transition-colors"
                aria-label="WhatsApp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/>
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-lg">
            © {new Date().getFullYear()} Mais Empréstimos. Todos os direitos reservados.
          </p>
          <p className="text-sm mt-2">
            Mais Empréstimos é um correspondente bancário independente autorizado.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
