import React from 'react';
import { supabase } from "@/integrations/supabase/client";

const Hero: React.FC = () => {
  const heroImageUrl = supabase.storage.from('images').getPublicUrl('hero-emprestimo-consignado.webp').data.publicUrl;

  return (
    <section className="bg-primary py-16 md:py-24">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-white md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cuide do seu futuro com quem entende de você
            </h1>
            <p className="text-2xl mb-8">
              Simule seu empréstimo sem sair de casa.
            </p>
            <a href="#simule-agora" className="btn-primary text-2xl px-8 py-4">
              Simular Agora
            </a>
          </div>
          <div className="md:w-1/2">
            <img 
              src={heroImageUrl}
              alt="Pessoas sorridentes" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
