export interface LearningExpansionCard {
  label: string;
  title: string;
  text: string;
  example: string;
}

export interface LearningExpansionContent {
  topic: string;
  title: string;
  intro: string;
  cards: LearningExpansionCard[];
  sources: { label: string; href: string }[];
}

const file = (id: string) => `https://drive.google.com/file/d/${id}/view`;

export const learningExpansions: Record<string, LearningExpansionContent> = {
  'tema-1': {
    topic: 'tema-1',
    title: 'De los marcos a una arquitectura aplicable',
    intro: 'Los marcos ayudan a estructurar el análisis. El siguiente paso es relacionar esas preguntas con decisiones concretas del negocio.',
    cards: [
      { label: 'Zachman', title: 'Cruza seis preguntas y seis perspectivas', text: '¿Qué?, ¿cómo?, ¿dónde?, ¿quién?, ¿cuándo? y ¿por qué? se revisan desde el alcance inicial hasta la operación. La matriz ayuda a encontrar dimensiones omitidas y a comunicar entre áreas.', example: 'En logística: inventario, recepción, sedes, responsables, horarios de actualización y objetivos de entrega.' },
      { label: 'TOGAF', title: 'Usa ADM como método de evolución', text: 'El ciclo ADM organiza el desarrollo y la gestión de la arquitectura de manera iterativa, conectando la estrategia con el diseño, la transición y la supervisión.', example: 'Antes de cambiar el sistema de inventario, identifica la situación actual, define el resultado esperado y coordina las etapas del cambio.' },
      { label: 'FEA', title: 'Coordina capacidades que cruzan áreas', text: 'Los modelos de referencia federados ayudan a que unidades con autonomía compartan criterios, servicios e información cuando colaboran en una misma misión.', example: 'Varias sedes pueden conservar su operación local y usar definiciones comunes para productos, pedidos y seguimiento.' },
      { label: 'Decisión', title: 'Elige el marco por el trabajo que necesitas', text: 'Zachman ordena preguntas y perspectivas; TOGAF aporta un método de trabajo; FEA sirve para coordinar entidades federadas. Se pueden complementar.', example: 'Primero define qué debe aclararse; después elige el método y los acuerdos de gobierno que mantendrán el diseño alineado.' },
    ],
    sources: [
      { label: 'Marco Zachman y TOGAF', href: file('1tNkZPWa3nE-uu8eaaG87Bot_9kOw8Px3') },
      { label: 'Arquitectura Federal Empresarial (FEA)', href: file('17p4bf7hcz4prvSm_48hBznhHyyViWMHH') },
    ],
  },
  'tema-2': {
    topic: 'tema-2',
    title: 'Conecta el valor del negocio con datos y sistemas',
    intro: 'La arquitectura de negocio explica cómo se crea valor. Los modelos de datos y aplicaciones hacen posible operar esa propuesta con información consistente.',
    cards: [
      { label: 'Negocio', title: 'Sigue el recorrido que crea valor', text: 'La cadena de valor conecta las actividades internas desde la adquisición de recursos hasta la entrega al cliente. Permite localizar demoras y oportunidades de mejora.', example: 'En almacén: compra → recepción → control → almacenamiento → preparación → despacho.' },
      { label: 'Modelo', title: 'Resume la propuesta con Canvas', text: 'Business Model Canvas representa nueve bloques del modelo, entre ellos la propuesta de valor, los segmentos, los canales, los recursos y las fuentes de ingreso.', example: 'Una tienda omnicanal relaciona su propuesta de compra simple con sus canales digitales, inventario y atención.' },
      { label: 'Datos', title: 'Modela entidades y relaciones', text: 'Una entidad representa algo sobre lo que se guarda información; las relaciones describen cómo se vinculan esas entidades. El modelo ofrece una base para organizar los registros.', example: 'Producto, proveedor, almacén y movimiento de inventario pueden vincularse con identificadores y reglas comunes.' },
      { label: 'Gobierno', title: 'Cuida la calidad durante todo el ciclo', text: 'La gestión de información establece políticas y procesos para mantener los datos accesibles, consistentes, útiles y protegidos.', example: 'Acordar quién mantiene el código de producto evita que compras y almacén registren el mismo artículo con nombres distintos.' },
    ],
    sources: [
      { label: 'Arquitectura de negocio', href: file('1dePK0HjCt_Xarsaeo2HEtSDVq4Soa6_Z') },
      { label: 'Arquitectura de datos', href: file('1rIBYvrAO2w3lb3NoZaNlRJJgI2b9cCP1') },
    ],
  },
  'tema-3': {
    topic: 'tema-3',
    title: 'Evalúa la nube junto con sus responsabilidades',
    intro: 'La decisión cloud combina elasticidad y acceso bajo demanda con control, costos, disponibilidad y seguridad. El proveedor no elimina la responsabilidad de la organización.',
    cards: [
      { label: 'Elasticidad', title: 'Ajusta recursos a la demanda', text: 'La nube permite ampliar o reducir capacidad sin mantener toda la infraestructura física para el pico máximo. El beneficio depende de dimensionar y vigilar el uso.', example: 'Una tienda puede preparar más capacidad para una campaña y reducirla cuando el tráfico vuelve a su nivel habitual.' },
      { label: 'Servicio', title: 'Compara IaaS, PaaS y SaaS', text: 'IaaS ofrece infraestructura, PaaS una plataforma para desarrollar y desplegar, y SaaS una aplicación lista para usar. A medida que el proveedor administra más capas, cambia el control disponible.', example: 'Elige según la personalización que necesitas y la capacidad del equipo para operar cada capa.' },
      { label: 'Red', title: 'Selecciona una topología coherente', text: 'Una red pública comparte infraestructura del proveedor; una privada reserva recursos para la organización; una híbrida combina ambos entornos.', example: 'Clasifica datos y dependencias antes de decidir qué servicios pueden convivir en cada entorno.' },
      { label: 'Seguridad', title: 'Reduce accesos y exposición', text: 'El material destaca contraseñas reutilizadas, software desactualizado y permisos excesivos. MFA, cifrado, actualizaciones y privilegio mínimo reducen riesgos comunes.', example: 'Revisa quién accede a cada recurso y cifra la información tanto al almacenarla como al transmitirla.' },
    ],
    sources: [
      { label: 'Modelos de servicio cloud', href: file('1Xq5GeifPvj1YCnMaGAXIAy9H6Fe_O5DO') },
      { label: 'Redes y ciberseguridad en la nube', href: file('1U-c58sC1TwD3ijtoQXxoGRLpVc0Vp7Ba') },
    ],
  },
  'tema-4': {
    topic: 'tema-4',
    title: 'Mejora el proceso antes de automatizarlo',
    intro: 'BPM organiza la mejora continua; BPMN hace visible el flujo y un BPMS puede ejecutarlo y medirlo. El modelo debe explicar el trabajo real y sus responsables.',
    cards: [
      { label: 'BPM', title: 'Recorre el ciclo completo', text: 'El ciclo de vida incluye diseño, modelado, ejecución, monitoreo y mejora. Medir el estado actual ayuda a distinguir causas de síntomas.', example: 'En recepción, mide tiempos y diferencias de inventario antes de rediseñar la aprobación.' },
      { label: 'BPMN', title: 'Representa eventos, tareas y decisiones', text: 'Los eventos marcan desencadenantes; las tareas muestran trabajo; las compuertas separan rutas según una condición. Los conectores dejan clara la secuencia.', example: 'Una compuerta separa “cantidad recibida coincide” de “registrar diferencia y avisar al proveedor”.' },
      { label: 'Roles', title: 'Usa pools y lanes para mostrar quién actúa', text: 'Pools representan participantes y lanes organizan áreas o roles. Los artefactos agregan datos, documentos o anotaciones para aclarar el contexto.', example: 'Un diagrama puede separar proveedor, almacén y compras, y señalar la orden de compra usada en cada traspaso.' },
      { label: 'Automatización', title: 'Conecta el flujo con sistemas y métricas', text: 'Un BPMS puede asignar tareas, aplicar reglas y monitorear estados. ERP y CRM aportan registros de operación y relación con clientes.', example: 'Una recepción fuera de tolerancia genera una revisión y deja trazabilidad de la decisión.' },
    ],
    sources: [
      { label: 'Gestión de procesos de negocio', href: file('1Mg3rwiczXI_cvz5-lyH8qyW5MGqTSFhn') },
      { label: 'Modelado de procesos con BPMN 2.0', href: file('1-yAokLwhLNdcxdwpT-At9xcjnhehqF9s') },
    ],
  },
  'tema-5': {
    topic: 'tema-5',
    title: 'Integra servicios sin perder control operativo',
    intro: 'Las APIs conectan aplicaciones mediante contratos explícitos. Los microservicios permiten evolucionar capacidades por separado, pero añaden exigencias de seguridad y operación.',
    cards: [
      { label: 'APIs', title: 'Define contratos para intercambiar datos', text: 'Una API evita que una aplicación dependa de los detalles internos de otra. Reutilización, interoperabilidad y desarrollo más ágil son beneficios cuando el contrato se mantiene claro.', example: 'La app de ventas consulta disponibilidad mediante una API y no accede directamente a la base de inventario.' },
      { label: 'Límites', title: 'Divide por capacidad de negocio', text: 'Cada microservicio debe atender una función delimitada, mantener cohesión interna y reducir dependencias externas.', example: 'Catálogo, pedidos y pagos son límites posibles; cada uno puede evolucionar sin desplegar toda la aplicación.' },
      { label: 'Gateway', title: 'Centraliza tareas de entrada', text: 'El API Gateway recibe solicitudes y puede encargarse de autenticación, enrutamiento, registro de actividad y control de acceso.', example: 'Una aplicación móvil usa un punto de entrada que dirige cada solicitud al servicio correspondiente.' },
      { label: 'Resiliencia', title: 'Diseña para fallos parciales', text: 'Monitoreo, trazabilidad, validaciones, manejo de excepciones y pruebas automatizadas ayudan a detectar fallos y mantener el servicio ante interrupciones parciales.', example: 'Si pagos no responde, la tienda conserva el pedido en estado pendiente y permite revisar la causa.' },
    ],
    sources: [
      { label: 'Microservicios: patrones y prácticas', href: file('133WmNhiNKJHPlF_bEPS6HZdXMV8G79eT') },
      { label: 'APIs y gestión de APIs', href: file('18oULDxYXmIPlH1D1cWYLj_iuNIAvDZ6h') },
    ],
  },
  'tema-6': {
    topic: 'tema-6',
    title: 'Elige el modelo de datos por el uso esperado',
    intro: 'Los sistemas operativos y los analíticos responden preguntas distintas. Combinar modelos requiere cuidar integración, calidad, costos y propósito.',
    cards: [
      { label: 'Relacional', title: 'Mantén transacciones estructuradas', text: 'Tablas, filas, columnas y relaciones ayudan a mantener consistencia en registros operativos como ventas, pagos y ERP.', example: 'Una venta referencia un cliente y varias líneas de producto con cantidades y precios.' },
      { label: 'NoSQL', title: 'Adapta el almacenamiento a los datos', text: 'Los modelos NoSQL cubren estructuras como documentos, grafos o columnas y pueden servir cuando hay datos semiestructurados, variedad o necesidad de escalar horizontalmente.', example: 'Eventos de sensores pueden conservar campos variables sin obligar a que cada lectura tenga la misma forma.' },
      { label: 'Analítica', title: 'Consolida historia para medir resultados', text: 'Un Data Warehouse integra datos históricos de varias fuentes para análisis y reportes ejecutivos, como indicadores clave de desempeño.', example: 'Ventas, llamadas y reclamos reunidos permiten revisar tendencias de servicio por periodo.' },
      { label: 'Big Data', title: 'Aplícalo cuando volumen, velocidad o variedad lo exijan', text: 'Puede habilitar análisis en tiempo real, personalización, optimización e innovación. También exige inversión, talento, gobierno de datos y cuidados de privacidad.', example: 'Monitoreo de flotas, millones de registros de comercio y analítica predictiva son escenarios que el material propone evaluar.' },
    ],
    sources: [
      { label: 'Modelado relacional, NoSQL y Data Warehouse', href: file('171FPyYXEc10urZLbFKFnTeyxDfGpvJAq') },
      { label: 'Big Data: concepto y características', href: file('1bF0oSAsfI-UT7kByRjiJ9jOosmkAJU7Z') },
    ],
  },
  'tema-7': {
    topic: 'tema-7',
    title: 'Innova con controles y resultados verificables',
    intro: 'La tecnología emergente aporta valor cuando responde a una necesidad, usa datos confiables y opera bajo responsabilidades, métricas y reglas claras.',
    cards: [
      { label: 'IA y ML', title: 'Distingue capacidad de método', text: 'La IA aborda tareas como reconocer patrones, apoyar decisiones o procesar lenguaje; el aprendizaje automático permite que un sistema aprenda patrones a partir de datos.', example: 'Analizar ventas para sugerir inventario o reconocer patrones de fraude son ejemplos del material.' },
      { label: 'Impacto', title: 'Mide beneficios y riesgos juntos', text: 'La IA puede mejorar eficiencia, reducir errores y personalizar servicios. Los costos, la calidad de datos, el talento especializado y los sesgos son riesgos de adopción.', example: 'Antes de usar una recomendación automática, revisa calidad de datos, errores y quién responde por la decisión.' },
      { label: 'Gobierno', title: 'Aclara quién decide y con qué criterios', text: 'El gobierno reúne estructuras o comités, principios, procesos, políticas, métricas, roles y responsabilidades para mantener la arquitectura alineada al negocio.', example: 'Un comité puede revisar seguridad, interoperabilidad y costo antes de aprobar un proyecto de IA.' },
      { label: 'Seguimiento', title: 'Convierte principios en evidencia', text: 'Indicadores de costo, tiempo, calidad y seguridad permiten comprobar si una solución aporta valor y si sigue dentro de los límites acordados.', example: 'Define línea base, responsable, umbral de riesgo y fecha de revisión antes de escalar un piloto.' },
    ],
    sources: [
      { label: 'IA y aprendizaje automático', href: file('1sQhT2Z_hZEqUPjcWkkqhkZD7i2_KWOuc') },
      { label: 'Gobierno de arquitectura de TI', href: file('1dXO8nasqjYWWa1tzDPtuch3P2CXjRdrJ') },
    ],
  },
};
