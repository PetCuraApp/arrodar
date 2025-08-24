'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

// Datos de ejemplo para los autos
const carData = [
  {
    id: 1,
    name: 'RENAULT KWID 1.0 2021',
    price: '$6.990.000',
    image: '/images/car1.jpg',
    features: ['MOTOR 1.0', 'KM 25.500', 'CAJA MT', 'RADIO TOUCH','AC','ALARMA','CIERRE CENTRALIZADO','ALZA VIDRIOS ELÉCTRICOS ELECTRICO'],
    category: 'hatchback',
  },
  {
    id: 2,
    name: 'DONGFENG LUXURY 500 1.5',
    price: '$9.990.000',
    image: '/images/car2.jpg',
    features: ['MOTOR 1.5', 'KM 70XXX', 'CAJA MT','RADIO TOUCH','AC','ALARMA','CIERRE CENTRALIZADO','MANDO AL VOLANTE','ASIENTOS DE CUERO'],
    category: 'suv',
  },
  {
    id: 3,
    name: 'CHEVROLET SAIL 1.4 2014',
    price: '$4.990.000',
    image: '/images/car3.jpg',
    features: ['Motor 1.4', 'KM 148XXX', 'Caja MT', 'RADIO TOUCH','AC', 'CIERRE CENTRALIZADO','ALZA VIDRIOS ELÉCTRICOS ELECTRICO'],
    category: 'sedan',
  },
  {
    id: 4,
    name: 'GREAT WALL M4 2020',
    price: '$7.500.000',
    image: '/images/car4.jpg',
    features: ['Motor 1.5', 'KM 39XXX', 'AC','RADIO TOUCH','MANDOAL VOLANTE','CIERRE CENTRALIZADO','ALARMA'],
    category: 'suv',
  },
  {
    id: 5,
    name: 'BAIC X25 1.5 2017',
    price: '$7.500.000',
    image: '/images/car5.jpg',
    features: ['MOTOR 1.5','KM 140XXX','RADIO TOUCH','CAMARA RETROCESO', 'CAJA MANUAL', 'AC','ALZA VIDRIOS ELECTRICOS','CIERRE CENTRALIZADO','NEBLINEROS'],
    category: 'suv',
  },
  {
    id: 6,
    name: 'HYUNDAI EON GLS 2016',
    price: '$5.390.000',
    image: '/images/car6.jpg',
    features: ['MOTOR 800','KM90XXX','CAJA MT','AC','ALZA VIDRIOS ELECTRICOS','CIERRE CENTRALIZADO','DETALLES ESTETICOS POR EL AÑO'],
    category: 'hatchback',
  },
  {
    id: 7,
    name: 'HYUNDAI veloSTER 1.6 2013',
    price: '$10.990.000',
    image: '/images/car7.jpg',
    features: ['MOTOR 1.6','KM90XXX','CAJA MT','AC','ALZA VIDRIOS ELECTRICOS','CIERRE CENTRALIZADO','NEBLINEROS','ASIENTOS DE CUERO','MANDO AL VOLANTE'],
    category: 'coupe',
  },
  {
    id: 8,
    name: 'JAC T8 DCAB 2.0 SDIESEL 2022',
    price: '$11.990.000',
    image: '/images/car8.jpg',
    features: ['MOTOR 2.0 DIESEL','KM 47XXX','AC','CAJA MT','VELOCIDAD CRUCERO','ASIENTOS DE CUERO','FRENO DE DISCO EN 4 RUEDAS','CAMARA 360','ENCENDIDO STARTSTOP','MANDO AL VOLANTE'],
    category: 'pickup',
  },
];

const AvailableCars = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredCar, setHoveredCar] = useState<number | null>(null);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredCars = activeFilter === 'all' 
    ? carData 
    : carData.filter(car => car.category === activeFilter);

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
    <motion.div
      ref={ref}
      id="disponibles"
      className="container-custom pt-16"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      <motion.div variants={itemVariants} className="text-center mb-12">
        <h2 className="section-title">Vehículos Disponibles</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explora nuestra selección de vehículos de alta calidad. Todos nuestros autos pasan por una rigurosa
          inspección de 150 puntos para garantizar su excelente estado.
        </p>
      </motion.div>

      {/* Filtros */}
      <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-10">
        <FilterButton 
          label="Todos" 
          active={activeFilter === 'all'} 
          onClick={() => setActiveFilter('all')} 
        />
        <FilterButton 
          label="SUV" 
          active={activeFilter === 'suv'} 
          onClick={() => setActiveFilter('suv')} 
        />
        <FilterButton 
          label="Sedán" 
          active={activeFilter === 'sedan'} 
          onClick={() => setActiveFilter('sedan')} 
        />
        <FilterButton 
          label="Hatchback" 
          active={activeFilter === 'hatchback'} 
          onClick={() => setActiveFilter('hatchback')} 
        />
        <FilterButton 
          label="Camioneta" 
          active={activeFilter === 'pickup'} 
          onClick={() => setActiveFilter('pickup')} 
        />
        <FilterButton 
          label="Coupé" 
          active={activeFilter === 'coupe'} 
          onClick={() => setActiveFilter('coupe')} 
        />
      </motion.div>

      {/* Grid de autos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCars.map((car, index) => (
          <motion.div
            key={car.id}
            variants={itemVariants}
            className="car-card rounded-xl overflow-hidden shadow-lg bg-white"
            onMouseEnter={() => setHoveredCar(car.id)}
            onMouseLeave={() => setHoveredCar(null)}
          >
            <div className="relative h-56 w-full overflow-hidden">
              <Image
                src={car.image}
                alt={car.name}
                fill
                className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              <div className="absolute bottom-4 left-4 z-20">
                <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {car.price}
                </span>
              </div>
              
              {/* Overlay al hacer hover */}
              <div 
                className={`car-overlay absolute inset-0 bg-primary/80 flex items-center justify-center z-30 transition-opacity duration-300 ${hoveredCar === car.id ? 'opacity-100' : 'opacity-0'}`}
              >
                <button className="btn-primary">Ver detalles</button>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
              <ul className="space-y-2">
                {car.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 mr-2 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Botón para ver más */}
      <motion.div variants={itemVariants} className="text-center mt-12">
        <button className="btn-primary">
          Ver todos los vehículos
        </button>
      </motion.div>
    </motion.div>
  );
};

const FilterButton = ({ 
  label, 
  active, 
  onClick 
}: { 
  label: string; 
  active: boolean; 
  onClick: () => void; 
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full transition-all duration-300 ${active ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
    >
      {label}
    </button>
  );
};

export default AvailableCars;