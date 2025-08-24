'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Fondo con efecto parallax */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80 z-10" />
      </div>

      {/* Contenido */}
      <div className="container-custom relative z-20 text-white">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4"
          >
            Encuentra el auto de tus sueños
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl mb-8"
          >
            Ofrecemos la mejor selección de vehículos nuevos y usados con financiamiento a tu medida.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#disponibles"
              className="btn-primary text-center"
            >
              Ver vehículos disponibles
            </a>
            <a
              href="#contacto"
              className="btn-secondary text-center"
            >
              Contáctanos
            </a>
          </motion.div>
        </div>
      </div>

      {/* Elementos decorativos animados */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute bottom-10 right-10 z-10 hidden lg:block"
      >
        <div className="relative h-32 w-32 rounded-full bg-accent/30 backdrop-blur-sm flex items-center justify-center">
          <span className="text-white font-bold text-xl">Financiamiento</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute top-40 left-10 z-10 hidden lg:block"
      >
        <div className="relative h-24 w-24 rounded-full bg-secondary/30 backdrop-blur-sm flex items-center justify-center">
          <span className="text-white font-bold text-lg">Garantía</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;