'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

type Testimonial = {
  id: number;
  name: string;
  position: string;
  image: string;
  quote: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Carlos Mendoza',
    position: 'Empresario',
    image: '/images/client1.jpg',
    quote: 'Excelente servicio y atención. El proceso de compra fue rápido y sin complicaciones. Muy satisfecho con mi nuevo vehículo.',
    rating: 5,
  },
  {
    id: 2,
    name: 'María González',
    position: 'Ingeniera',
    image: '/images/client2.jpg',
    quote: 'Me encantó la transparencia durante todo el proceso. El financiamiento fue justo y el auto está en perfectas condiciones.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Roberto Sánchez',
    position: 'Médico',
    image: '/images/client3.jpg',
    quote: 'Ya es la segunda vez que compro con ellos. El servicio post-venta es excelente y siempre están disponibles para resolver dudas.',
    rating: 4,
  },
  {
    id: 4,
    name: 'Ana Martínez',
    position: 'Profesora',
    image: '/images/client4.jpg',
    quote: 'Encontré exactamente lo que buscaba a un precio justo. El asesor fue muy profesional y me ayudó a elegir la mejor opción.',
    rating: 5,
  },
];

const Clients = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Auto-rotación de testimonios
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.section
      ref={ref}
      id="clientes"
      className="py-20 bg-gray-50"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      <div className="container-custom">
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="section-title">Nuestros Clientes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación.
            Conoce las experiencias de quienes ya han confiado en nosotros.
          </p>
        </motion.div>

        {/* Testimonios */}
        <div className="relative max-w-4xl mx-auto">
          {/* Carrusel de testimonios */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <motion.div
                    variants={itemVariants}
                    className="bg-white rounded-xl shadow-lg p-8 relative"
                  >
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                      <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center mb-4">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <blockquote className="text-gray-700 italic mb-4">"{testimonial.quote}"</blockquote>
                        <div>
                          <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                          <p className="text-gray-500">{testimonial.position}</p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <svg className="w-10 h-10 text-primary/10" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Controles del carrusel */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-primary w-6' : 'bg-gray-300'}`}
                aria-label={`Ver testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Estadísticas */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <StatCard number="1500+" label="Clientes satisfechos" />
          <StatCard number="2000+" label="Vehículos vendidos" />
          <StatCard number="98%" label="Índice de satisfacción" />
          <StatCard number="10+" label="Años de experiencia" />
        </motion.div>
      </div>
    </motion.section>
  );
};

const StatCard = ({ number, label }: { number: string; label: string }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center">
      <h3 className="text-3xl font-bold text-primary mb-2">{number}</h3>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

export default Clients;