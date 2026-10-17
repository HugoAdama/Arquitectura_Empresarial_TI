export interface CourseNavigationItem {
  id: string;
  label: string;
  sidebarLabel: string;
  topic?: boolean;
  filterId?: string;
}

export const courseNavigation: CourseNavigationItem[] = [
  { id: 'ruta-aprendizaje', label: 'Ruta de aprendizaje', sidebarLabel: 'Ruta de aprendizaje' },
  { id: 'idea', label: 'Tema 1 · Fundamentos', sidebarLabel: '01 · Fundamentos', topic: true, filterId: 'tema-1' },
  { id: 'tema-2', label: 'Tema 2 · Dominios', sidebarLabel: '02 · Dominios', topic: true },
  { id: 'tema-3', label: 'Tema 3 · Nube e infraestructura', sidebarLabel: '03 · Nube e infraestructura', topic: true },
  { id: 'tema-4', label: 'Tema 4 · Procesos', sidebarLabel: '04 · Procesos', topic: true },
  { id: 'tema-5', label: 'Tema 5 · Servicios y APIs', sidebarLabel: '05 · Servicios y APIs', topic: true },
  { id: 'tema-6', label: 'Tema 6 · Datos y analítica', sidebarLabel: '06 · Datos y analítica', topic: true },
  { id: 'tema-7', label: 'Tema 7 · Emergentes y gobierno', sidebarLabel: '07 · Emergentes y gobierno', topic: true },
  { id: 'caso-banco', label: 'Caso del banco', sidebarLabel: 'Caso del banco' },
  { id: 'glosario', label: 'Glosario', sidebarLabel: 'Glosario' },
  { id: 'repaso', label: 'Repaso general', sidebarLabel: 'Repaso general' },
  { id: 'fuentes', label: 'Fuentes del curso', sidebarLabel: 'Fuentes del curso' },
  { id: 'cuestionarios', label: 'Cuestionarios · 4 niveles', sidebarLabel: 'Cuestionarios · 4 niveles' },
  { id: 'actividades', label: 'Actividades por tema', sidebarLabel: 'Actividades por tema' },
  { id: 'caso-progresivo', label: 'Caso práctico progresivo', sidebarLabel: 'Caso práctico progresivo' },
  { id: 'repaso-activo', label: 'Tarjetas de repaso', sidebarLabel: 'Tarjetas de repaso' },
];

export const courseTopics = courseNavigation.filter((item) => item.topic);
