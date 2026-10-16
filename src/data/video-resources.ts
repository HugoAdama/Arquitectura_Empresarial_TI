export interface VideoResource {
  title: string;
  description: string;
  channel: string;
  id: string;
  language: 'Español' | 'English';
}

export const videoResources: Record<string, VideoResource> = {
  'tema-1': {
    title: 'TOGAF® Standard, Version 9.2',
    description: 'Visión general del estándar y su método para desarrollar arquitectura empresarial.',
    channel: 'The Open Group',
    id: 'ahL1BCy_xLg',
    language: 'English',
  },
  'tema-2': {
    title: 'Enterprise Architecture: Architecting the Enterprise?',
    description: 'Una charla sobre el papel de arquitectura empresarial al conectar estrategia y tecnología.',
    channel: 'GOTO Conferences · Gregor Hohpe',
    id: 'mS0AJLqmnvQ',
    language: 'English',
  },
  'tema-3': {
    title: '¿Qué es IaaS, PaaS y SaaS?',
    description: 'Repasa los modelos de servicio cloud y las distintas responsabilidades de gestión.',
    channel: 'Alberto López · Ciberseguridad y Sistemas de Información',
    id: 'VR8aXePkQ5M',
    language: 'Español',
  },
  'tema-4': {
    title: 'Modelado de procesos de negocio con BPMN 2.0',
    description: 'Ejemplos y buenas prácticas de modelado de procesos con Bizagi Modeler.',
    channel: 'Seys',
    id: '7Ogcn3q27fY',
    language: 'Español',
  },
  'tema-5': {
    title: 'What are Microservices?',
    description: 'Compara la arquitectura monolítica y los microservicios con un ejemplo guiado.',
    channel: 'IBM Technology',
    id: 'CdBtNQZH8a4',
    language: 'English',
  },
  'tema-6': {
    title: 'Big Data Explained',
    description: 'Introducción visual a la evolución de Big Data y la analítica.',
    channel: 'IBM Technology',
    id: 'HRfR4dJoKDc',
    language: 'English',
  },
  'tema-7': {
    title: 'AI, Machine Learning, Deep Learning and Generative AI',
    description: 'Distingue IA, aprendizaje automático, deep learning y modelos generativos.',
    channel: 'IBM Technology',
    id: 'qYNweeDHiyU',
    language: 'English',
  },
};
