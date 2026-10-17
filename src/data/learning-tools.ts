import { courseTopics } from './course-navigation';

const topicGuidance: Record<string, { time: string; goal: string; task: string }> = {
  idea: { time: '15 min', goal: 'Explicar qué conecta la arquitectura empresarial y para qué sirve.', task: 'Identifica un objetivo de negocio y una decisión tecnológica que lo apoye.' },
  'tema-2': { time: '20 min', goal: 'Relacionar negocio, datos, aplicaciones y tecnología.', task: 'Sigue un dato desde el proceso que lo crea hasta el sistema que lo consume.' },
  'tema-3': { time: '20 min', goal: 'Distinguir modelos cloud, infraestructura y controles de seguridad.', task: 'Elige IaaS, PaaS o SaaS según quién necesita administrar la plataforma.' },
  'tema-4': { time: '20 min', goal: 'Analizar y modelar procesos antes de automatizarlos.', task: 'Dibuja una decisión del proceso con dos posibles resultados.' },
  'tema-5': { time: '20 min', goal: 'Diseñar integraciones con contratos, responsabilidades y límites claros.', task: 'Describe qué información intercambiaría una API y quién puede usarla.' },
  'tema-6': { time: '20 min', goal: 'Gobernar datos y evaluar soluciones analíticas con contexto.', task: 'Define una métrica, su dueño y la fuente que la respalda.' },
  'tema-7': { time: '25 min', goal: 'Evaluar riesgos, valor y gobierno de cambios tecnológicos.', task: 'Compara el beneficio esperado con un riesgo y una medida de control.' },
};

export const topics = courseTopics.map((topic) => ({
  id: topic.id,
  label: topic.label.replace(/^Tema \d+ · /, ''),
  ...topicGuidance[topic.id],
}));

export const activities = [
  { topic: 'Fundamentos', question: '¿Qué describe mejor el propósito de la arquitectura empresarial?', options: ['Conectar objetivos, operación, información y tecnología para orientar cambios.', 'Elegir una marca de software para todas las áreas.', 'Documentar solo los servidores de la organización.'], correct: 0, explanation: 'La arquitectura empresarial conecta las decisiones de tecnología con capacidades y resultados del negocio.' },
  { topic: 'Dominios', question: 'El proceso de despacho cambia y ahora requiere escanear cada paquete. ¿Qué dominios deben revisarse?', options: ['Solo tecnología.', 'Negocio, datos, aplicaciones y tecnología relacionados con el cambio.', 'Solo aplicaciones.'], correct: 1, explanation: 'Un cambio de proceso puede afectar los datos capturados, los sistemas que los usan y la tecnología que soporta la operación.' },
  { topic: 'Nube', question: 'Una empresa quiere usar una aplicación lista para gestionar correo y no administrar su plataforma. ¿Qué modelo encaja?', options: ['IaaS.', 'PaaS.', 'SaaS.'], correct: 2, explanation: 'SaaS entrega una aplicación administrada por el proveedor; la organización conserva responsabilidades sobre usuarios, datos y configuración.' },
  { topic: 'Procesos', question: '¿Qué conviene hacer antes de automatizar un proceso con muchas demoras?', options: ['Entender y medir el proceso actual, encontrar causas y diseñar la mejora.', 'Automatizar cada paso tal como está.', 'Cambiar de plataforma sin hablar con sus usuarios.'], correct: 0, explanation: 'Automatizar un proceso confuso puede acelerar errores. Primero hay que entender el flujo y sus causas.' },
  { topic: 'Servicios y APIs', question: '¿Qué aporta una API bien gobernada entre dos aplicaciones?', options: ['Elimina la necesidad de autenticación.', 'Define un contrato de intercambio y reduce el acoplamiento entre sistemas.', 'Garantiza que nunca habrá errores.'], correct: 1, explanation: 'Una API establece un contrato estable, pero también necesita seguridad, monitoreo, límites y gestión de versiones.' },
  { topic: 'Datos y analítica', question: 'Dos áreas reportan cifras distintas de “clientes activos”. ¿Qué acción ayuda más?', options: ['Acordar una definición, responsable, periodo y fuente para esa métrica.', 'Promediar los resultados.', 'Usar el número más alto.'], correct: 0, explanation: 'Una métrica gobernada necesita significado común, dueño y linaje para que las áreas tomen decisiones comparables.' },
  { topic: 'Gobierno', question: '¿Qué evidencia debería habilitar que un piloto tecnológico pase a una siguiente etapa?', options: ['Que el proveedor lo recomiende.', 'Que cumpla criterios acordados de valor, seguridad, operación y reversa.', 'Que se haya gastado el presupuesto asignado.'], correct: 1, explanation: 'El paso debe depender de resultados medidos y controles comprobados, no solo del calendario o de la inversión realizada.' },
];

export const cards = [
  { front: '¿Qué conecta la arquitectura empresarial?', back: 'La estrategia y los objetivos del negocio con sus procesos, información, aplicaciones y tecnología.' },
  { front: '¿Cuáles son los cuatro dominios habituales?', back: 'Negocio, datos, aplicaciones y tecnología.' },
  { front: '¿Qué administra principalmente IaaS?', back: 'El proveedor ofrece cómputo, almacenamiento y redes; el cliente administra sistema operativo y capas superiores.' },
  { front: '¿Qué diferencia BPM de BPMN?', back: 'BPM es la disciplina de gestión y mejora de procesos; BPMN es una notación para modelarlos visualmente.' },
  { front: '¿Para qué sirve una API?', back: 'Para exponer capacidades mediante un contrato que permite a otros sistemas integrarse con límites y controles definidos.' },
  { front: '¿Qué hace confiable una métrica?', back: 'Una definición acordada, un responsable, una fuente trazable y reglas consistentes de cálculo.' },
  { front: '¿Qué son RTO y RPO?', back: 'RTO fija el tiempo objetivo para recuperar un servicio; RPO fija cuánta pérdida de datos, medida en tiempo, se tolera.' },
  { front: '¿Cuándo conviene revisar una arquitectura?', back: 'Durante el diseño y los cambios relevantes, y también en operación para comprobar resultados, riesgos y excepciones.' },
  { front: '¿Qué significa privilegio mínimo?', back: 'Dar a cada identidad solo los permisos necesarios para su tarea y por el tiempo necesario.' },
  { front: '¿Qué revisar al elegir una solución cloud?', back: 'Valor del negocio, seguridad, regulación, continuidad, costo total, capacidades del equipo e independencia del proveedor.' },
  { front: '¿Qué es idempotencia en una API?', back: 'La propiedad que permite repetir una solicitud sin ejecutar dos veces el mismo efecto, útil ante reintentos.' },
  { front: '¿Qué debe tener un caso de negocio?', back: 'Resultados esperados, línea base, costos totales, riesgos, responsables e indicadores para verificar beneficios.' },
];

export const caseStages = [
  { title: '1 · Entender el reto', prompt: 'El banco quiere migrar su core a microservicios en nube antes del cierre fiscal. El 68 % de los procesos críticos depende de sistemas legacy con integraciones no documentadas. ¿Qué necesitas averiguar primero?', hint: 'Mapea objetivos, procesos críticos, dependencias, datos, responsables y obligaciones regulatorias. Aún no elijas plataforma.' },
  { title: '2 · Relacionar los dominios', prompt: 'El inventario muestra que los saldos se actualizan en dos sistemas y que las sucursales tienen conectividad intermitente. ¿Qué vistas de arquitectura ayudarían a explicar el impacto?', hint: 'Relaciona proceso de atención, datos de saldo, aplicaciones involucradas, interfaces y tecnología de sucursal; identifica la fuente autorizada.' },
  { title: '3 · Definir alternativas', prompt: 'La dirección propone migrar todo junto; operaciones teme una interrupción y el equipo no tiene experiencia operando muchos servicios. ¿Qué opciones compararías?', hint: 'Compara una migración por oleadas, modernización gradual y coexistencia temporal. Considera capacidad operativa, continuidad, seguridad, costo total y salida.' },
  { title: '4 · Preparar un piloto', prompt: '¿Qué servicio seleccionarías para el piloto y qué condiciones pondrías antes de ampliar el alcance?', hint: 'Escoge una carga representativa pero de impacto acotado. Define dueño, línea base, indicadores, pruebas de recuperación, controles, criterios de salida y reversa.' },
  { title: '5 · Medir y decidir', prompt: 'El piloto redujo tiempo de despliegue, pero elevó el costo de soporte y tuvo una falla de conciliación. ¿Se debe escalar?', hint: 'No escales automáticamente. Investiga la causa, compara métricas con la línea base, corrige controles y vuelve a medir antes de decidir.' },
];
