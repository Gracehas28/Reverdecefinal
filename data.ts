import { Apartment, Review, FAQItem, Attraction } from './types';

export const HERO_IMAGE = 'https://i.imgur.com/VlWIIAo.jpeg';
export const APARTMENT_IMAGE = '/src/assets/images/cartagena_apartment_1780459938071.png';
export const POOL_IMAGE = '/src/assets/images/cartagena_pool_1780459951840.png';
export const TOUR_IMAGE = '/src/assets/images/cartagena_tour_1780459965401.png';

// High-quality additional stock images supporting proper categories
export const ADDITIONAL_IMAGES = {
  bedroom: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80',
  kitchen: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
  balcony: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
  beach: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
  chiva: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
  cartagenaStreet: 'https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?auto=format&fit=crop&w=800&q=80'
};

export const APARTMENTS_DATA: Apartment[] = [
  {
    id: '1',
    name: 'Suite Deluxe Reverdece (Vista al Mar Directa)',
    bedrooms: 2,
    bathrooms: 2,
    capacity: 6,
    view: 'Frente al Mar Directo',
    pricePerNight: 420000, // Price in COP
    competitorPrice: 750000,
    image: APARTMENT_IMAGE,
    category: 'ocean_view',
    featured: true,
    benefits: ['Balcón premium con mesa', 'Cocina abierta', 'Aire acondicionado inverter', 'Smart TV 55" UHD']
  },
  {
    id: '2',
    name: 'Apartamento Familiar Reverdece Coral',
    bedrooms: 3,
    bathrooms: 2,
    capacity: 9,
    view: 'Vista al Mar y Piscina',
    pricePerNight: 550000,
    competitorPrice: 950000,
    image: ADDITIONAL_IMAGES.bedroom,
    category: 'three_bedroom',
    featured: true,
    benefits: ['Baño privado suite', 'Sofá cama XL en sala', 'Comedor de 8 puestos', 'Lavadora y secadora']
  },
  {
    id: '3',
    name: 'Apartamento Práctico Reverdece Arena',
    bedrooms: 2,
    bathrooms: 1,
    capacity: 5,
    view: 'Vista Lateral al Mar',
    pricePerNight: 350000,
    competitorPrice: 580000,
    image: ADDITIONAL_IMAGES.balcony,
    category: 'two_bedroom',
    featured: true,
    benefits: ['WiFi fibra óptica 300Mb', 'Zona de teletrabajo', 'Aire autónomo', 'Cocina totalmente equipada']
  },
  {
    id: '4',
    name: 'Apartasuite Reverdece Brisa Tropical',
    bedrooms: 2,
    bathrooms: 2,
    capacity: 6,
    view: 'Vista Directa al Océano',
    pricePerNight: 430000,
    competitorPrice: 720000,
    image: ADDITIONAL_IMAGES.kitchen,
    category: 'ocean_view',
    featured: false,
    benefits: ['Balcón con hamaca', 'Climatización individual', 'Cafetera automática', 'Netflix premium incluido']
  },
  {
    id: '5',
    name: 'Penthouse Familiar Reverdece Imperial',
    bedrooms: 3,
    bathrooms: 3,
    capacity: 11,
    view: 'Vista de 180° Bahía y Océano',
    pricePerNight: 750000,
    competitorPrice: 1400000,
    image: POOL_IMAGE, // Pool / premium vibe
    category: 'pool',
    featured: true,
    benefits: ['Terraza gigante privada', 'Mesas exteriores', 'Jacuzzi compartido en edificio', 'Acabados de lujo']
  },
  {
    id: '6',
    name: 'Apartamento Reverdece Palmeras',
    bedrooms: 2,
    bathrooms: 2,
    capacity: 6,
    view: 'Vista a la Piscina del Edificio',
    pricePerNight: 390000,
    competitorPrice: 650000,
    image: ADDITIONAL_IMAGES.beach,
    category: 'pool',
    featured: false,
    benefits: ['Acceso directo a zona húmeda', 'Ideal para adultos mayores', 'Aire centralizado', 'Smart TV en cuartos']
  }
];

export const REVIEWS_DATA: Review[] = [
  {
    id: '1',
    author: 'María González',
    origin: 'Familia de Medellín',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5,
    text: 'Increíble experiencia. Viajamos 3 familias y cada una tuvo su apartamento con vista al mar. Los niños disfrutaron muchísimo la piscina y la ubicación es perfecta.',
    date: 'Hace 2 semanas'
  },
  {
    id: '2',
    author: 'Carlos Ramírez',
    origin: 'Grupo de Amigos de Bogotá',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5,
    text: 'La atención fue excepcional. Nos recogieron en el aeropuerto y durante toda la estadía estuvieron pendientes por WhatsApp. ¡Volveremos sin duda!',
    date: 'Hace 1 mes'
  },
  {
    id: '3',
    author: 'Claudia Restrepo',
    origin: 'Familia de Cali',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5,
    text: 'Ahorramos muchísimo dinero cocinando frente al mar. El apartamento Reverdece tenía todo impecable, aires helados, Smart TV con Netflix listo y WiFi súper rápido. Muy recomendado.',
    date: 'Hace 3 semanas'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: '¿Cuándo debo reservar?',
    answer: 'Te recomendamos reservar con mínimo 15 días de anticipación para obtener descuentos por reserva anticipada y asegurar la mejor disponibilidad, ya que nuestros apartamentos se ocupan rápidamente en temporada alta.'
  },
  {
    question: '¿Qué incluye exactamente el apartamento?',
    answer: 'Incluye el apartamento completamente amoblado con 2 o 3 habitaciones, cocina totalmente equipada con electrodomésticos y utensilios, sábanas y toallas premium, aires acondicionados nuevos, Smart TV con streaming, Internet de fibra óptica de alta velocidad, acceso a la piscina, áreas comunes del edificio y soporte por WhatsApp 24/7.'
  },
  {
    question: '¿Están cerca de la playa?',
    answer: 'Sí, estamos a pocas cuadras del mar Caribe (caminando unos 3 a 5 minutos) en una zona segura y turística de Cartagena. La mayoría de nuestros apartamentos gozan de vista directa o lateral al mar desde sus balcones.'
  },
  {
    question: '¿Cómo funciona el transporte desde el aeropuerto?',
    answer: '¡Es totalmente gratuito para reservas superiores a 4 noches! Simplemente nos envías tu itinerario de vuelo mínimo con 48 horas de anticipación y nuestro conductor asignado estará esperándote en la puerta de salidas nacionales con un cartel a tu nombre.'
  },
  {
    question: '¿Qué tours incluyen o tienen descuento?',
    answer: 'Ofrecemos de manera exclusiva un City Tour en chiva GRATUITO para tu grupo y hasta un 15% de descuento directo en operadores locales de confianza para el Tour Atardecer en la Bahía, pasadías premium en Isla de Barú (Islas del Rosario), y deportes acuáticos.'
  },
  {
    question: '¿Hay soporte durante la estadía?',
    answer: '¡Por supuesto! Recibirás atención y asesoría constante a través de un grupo de WhatsApp dedicado exclusivamente a tu reserva. Estamos disponibles las 24 horas para ayudarte con cualquier emergencia, recomendaciones de restaurantes, ayuda técnica o reservas adicionales.'
  }
];

export const MAP_LOCATIONS: Attraction[] = [
  {
    id: 'edificio',
    name: 'Torre Primi (Edificio Principal)',
    distance: 'Punto Central',
    description: 'Ubicación estratégica, cerca de las zonas turísticas.',
    coords: { x: 50, y: 55 },
    icon: 'home'
  },
  {
    id: 'playa',
    name: 'Playas de Marbella',
    distance: 'A 50m (1 min andando)',
    description: 'Brisa caribeña cruzando la amplia avenida de Marbella frente al mar.',
    coords: { x: 42, y: 35 },
    icon: 'waves'
  },
  {
    id: 'centro',
    name: 'Centro Histórico (Murallas)',
    distance: 'A 2 km (3 mins en taxi / 15 mins andando)',
    description: 'Las murallas coloniales, iglesias históricas, restaurantes gourmet y vida nocturna mágica de Cartagena.',
    coords: { x: 75, y: 15 },
    icon: 'landmark'
  },
  {
    id: 'aeropuerto',
    name: 'Aeropuerto Rafael Núñez',
    distance: 'A 3 km (5 mins de trayecto)',
    description: 'Aeropuerto internacional de Cartagena, traslado incluido gratuito.',
    coords: { x: 88, y: 80 },
    icon: 'plane'
  },
  {
    id: 'restaurante',
    name: 'Restaurantes y Supermercados locales',
    distance: 'A 100m (1 min andando)',
    description: 'Supermercados 24 horas, droguerías, cafés y restaurantes locales de clase mundial.',
    coords: { x: 58, y: 40 },
    icon: 'utensils'
  }
];

export const EXCLUSIVE_BONUSES = [
  {
    id: 'b1',
    title: 'City Tour en Chiva Navideña/Rumbera',
    description: 'Disfruta de Cartagena con música tradicional, guía bilingüe y recorrido por monumentos históricos para todo tu grupo.',
    value: 'Valor real: $250.000 COP',
    tag: '¡GRATIS!'
  },
  {
    id: 'b2',
    title: 'Traslado Privado Aeropuerto-Edificio',
    description: 'Un conductor profesional te espera a la llegada para transportarte con aire acondicionado y maletero amplio directo al apartamento.',
    value: 'Valor real: $80.000 COP',
    tag: '¡GRATIS!'
  },
  {
    id: 'b3',
    title: 'Descuento 15% en Pasadía Barú',
    description: 'Pasadía exclusivo en club de playa privado en Playa Blanca o Isla Barú con almuerzo caribeño incluido.',
    value: 'Valor real: $120.000 COP de ahorro',
    tag: 'DESCUENTO EXCLUSIVO'
  },
  {
    id: 'b4',
    title: 'Kit de Bienvenida Tropical',
    description: 'Al ingresar, encontrarás café local de cortesía, frutas frescas de la región y agua fría para iniciar tus vacaciones refrescado.',
    value: 'Valor real: $50.000 COP',
    tag: 'REGALO'
  }
];
