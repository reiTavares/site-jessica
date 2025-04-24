import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "José Silva",
      age: 67,
      testimonial: "Fui muito bem atendido e consegui meu empréstimo sem complicação.",
      image: "https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Maria Oliveira",
      age: 62,
      testimonial: "O processo foi rápido e as parcelas cabem no meu orçamento.",
      image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Antônio Santos",
      age: 70,
      testimonial: "Atendimento atencioso e soluções que realmente ajudaram nas minhas finanças.",
      image: "https://images.unsplash.com/photo-1553867745-6e038d085e86?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">
          O que dizem nossos clientes
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 transition-transform"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-20 h-20 rounded-full object-cover mr-4 border-2 border-secondary"
                />
                <div>
                  <h3 className="text-xl font-bold">{testimonial.name}</h3>
                  <p className="text-gray-700">{testimonial.age} anos</p>
                </div>
              </div>
              <p className="text-gray-700 text-lg italic">"{testimonial.testimonial}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
