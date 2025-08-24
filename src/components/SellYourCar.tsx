'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SellYourCar = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    carBrand: '',
    carModel: '',
    carYear: '',
    carKm: '',
    message: '',
  });

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    alert('¡Gracias por tu información! Nos pondremos en contacto contigo pronto.');
    // Resetear el formulario
    setFormData({
      name: '',
      email: '',
      phone: '',
      carBrand: '',
      carModel: '',
      carYear: '',
      carKm: '',
      message: '',
    });
  };

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
    <section id="vendemos" className="py-20 bg-light dark:bg-dark">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenido izquierdo */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className="section-title mb-6 dark:text-light">
              ¿Quieres vender tu auto?
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-300 mb-8">
              Obtén una oferta justa por tu vehículo en minutos. Nuestro proceso es simple, transparente y sin compromisos.
            </motion.p>
            
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-4 dark:text-light">¿Por qué vendernos tu auto?</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                {[
                  'Pago inmediato y al mejor precio del mercado',
                  'Nos encargamos de todo el papeleo',
                  'Sin costos ocultos ni comisiones',
                  'Evaluación profesional y justa',
                  'Proceso rápido y sin complicaciones'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="flex items-start"
                  >
                    <svg className="w-5 h-5 text-accent mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div variants={itemVariants} className="mt-8">
              <div className="p-6 bg-white dark:bg-secondary rounded-lg shadow-md border-l-4 border-accent">
                <h4 className="font-semibold text-lg mb-2 dark:text-light">¿Cómo funciona?</h4>
                <ol className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="bg-accent text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">1</span>
                    <span>Completa el formulario con los datos de tu vehículo</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-accent text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">2</span>
                    <span>Recibe una valoración preliminar en menos de 24 horas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-accent text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">3</span>
                    <span>Agenda una inspección física del vehículo</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-accent text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">4</span>
                    <span>Recibe el pago y finaliza la transferencia</span>
                  </li>
                </ol>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-secondary rounded-xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-6 text-center dark:text-light">Cuéntanos sobre tu auto</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nombre completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-primary dark:border-secondary dark:text-light"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Correo electrónico</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-primary dark:border-secondary dark:text-light"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Teléfono</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-primary dark:border-secondary dark:text-light"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="carBrand" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Marca</label>
                  <input
                    type="text"
                    id="carBrand"
                    name="carBrand"
                    value={formData.carBrand}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-primary dark:border-secondary dark:text-light"
                  />
                </div>
                
                <div>
                  <label htmlFor="carModel" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Modelo</label>
                  <input
                    type="text"
                    id="carModel"
                    name="carModel"
                    value={formData.carModel}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-primary dark:border-secondary dark:text-light"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="carYear" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Año</label>
                  <input
                    type="number"
                    id="carYear"
                    name="carYear"
                    value={formData.carYear}
                    onChange={handleChange}
                    required
                    min="1900"
                    max={new Date().getFullYear()}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-primary dark:border-secondary dark:text-light"
                  />
                </div>
                
                <div>
                  <label htmlFor="carKm" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Kilometraje</label>
                  <input
                    type="number"
                    id="carKm"
                    name="carKm"
                    value={formData.carKm}
                    onChange={handleChange}
                    required
                    min="0"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-primary dark:border-secondary dark:text-light"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Información adicional</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-primary dark:border-secondary dark:text-light"
                  placeholder="Cuéntanos más sobre tu vehículo (estado, equipamiento, etc.)"
                />
              </div>
              
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full btn-primary py-3 text-center"
                >
                  Solicitar valoración
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SellYourCar;