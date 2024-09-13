import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './service_details.module.css'

const services = [
  {
      id: 'impuestos',
      title: "Impuestos personales y de negocios",
      description: "En Liurka Fiscal Consultancy, entendemos que la gestión fiscal es crucial para el éxito de tu vida personal y profesional. Nos especializamos en ofrecer asesoría fiscal integral para individuos y empresas, ayudándote a maximizar tus beneficios fiscales y asegurar el cumplimiento con todas las normativas vigentes. Nuestro enfoque personalizado te permitirá optimizar tu situación tributaria de manera efectiva y conforme a la ley.",
      details: "Nuestro servicio de impuestos abarca desde la preparación y presentación de declaraciones hasta la planificación fiscal estratégica. Analizamos tu situación financiera para identificar todas las deducciones y créditos fiscales disponibles, ayudando a reducir tu carga tributaria. Nos encargamos de la recopilación y organización de la documentación necesaria, la preparación de tus declaraciones de impuestos y la presentación ante las autoridades fiscales. Además, ofrecemos asesoría continua durante todo el año para ayudarte a tomar decisiones fiscales informadas y evitar problemas con las autoridades fiscales. En caso de auditorías o revisiones, estamos aquí para proporcionarte el apoyo necesario y resolver cualquier inquietud que pueda surgir."
  },
  {
      id: 'aperturas',
      title: "Aperturas de compañía",
      description: "Comenzar un nuevo negocio puede ser un proceso complejo, pero en Liurka Fiscal Consultancy estamos aquí para simplificarlo. Ofrecemos asesoramiento completo sobre la elección de la estructura legal más adecuada para tu empresa, ya sea una sociedad anónima, una sociedad de responsabilidad limitada u otra forma jurídica. Evaluamos tus necesidades y objetivos para ayudarte a seleccionar la opción que mejor se adapte a tus requerimientos y maximice los beneficios fiscales.",
      details: "Nuestro servicio incluye todo lo necesario para la constitución legal de tu empresa. Te guiamos a través de cada paso del proceso, desde la elaboración de los documentos fundacionales hasta su presentación ante las autoridades correspondientes. Esto incluye la redacción de estatutos, la obtención de licencias y permisos necesarios, y el registro de nombre comercial. También proporcionamos asesoría sobre las obligaciones fiscales y legales que tu empresa deberá cumplir, asegurando que estés preparado para operar de manera legal y eficiente. Nuestro objetivo es facilitarte el proceso de apertura para que puedas concentrarte en el crecimiento y desarrollo de tu negocio sin preocupaciones legales."
  },
  {
      id: 'asilo',
      title: "Asilo político (I-220A y parole)",
      description: "Buscar asilo político es un proceso crucial para quienes necesitan protección debido a condiciones adversas en su país de origen. En Liurka Fiscal Consultancy, ofrecemos un apoyo exhaustivo en la preparación y presentación de solicitudes de asilo político y permisos de entrada humanitaria. Nuestro equipo de expertos está comprometido a ayudarte a navegar por este proceso complicado con la mayor claridad y apoyo posible.",
      details: "Te asistimos en cada etapa del proceso de solicitud de asilo, comenzando con la recopilación de la documentación necesaria y la preparación de la solicitud inicial. Esto incluye la redacción de declaraciones personales detalladas que expliquen las razones de tu solicitud y la recopilación de pruebas que respalden tu caso. Además, te proporcionamos orientación sobre cómo prepararte para entrevistas con las autoridades migratorias y te ofrecemos simulacros de entrevistas para asegurar que estés bien preparado. También te mantenemos informado sobre el progreso de tu solicitud y te ayudamos a responder a cualquier solicitud adicional de información por parte de las autoridades. Nuestro objetivo es aumentar tus posibilidades de éxito y brindarte un soporte constante durante todo el proceso de asilo."
  },
  {
      id: 'residencia',
      title: "Residencia permanente",
      description: "Obtener la residencia permanente en un nuevo país es un objetivo significativo que puede ofrecer muchas oportunidades. En Liurka Fiscal Consultancy, te ofrecemos un acompañamiento completo en la preparación y presentación de solicitudes de residencia permanente. Trabajamos contigo para asegurarnos de que cumplas con todos los requisitos necesarios y que tu solicitud sea completa y precisa.",
      details: "Nuestro servicio de residencia permanente abarca la preparación de todos los formularios y documentación necesarios para tu solicitud. Esto incluye la revisión y completación de formularios, la recopilación de documentos de apoyo y la preparación para cualquier entrevista con las autoridades migratorias. Además, te proporcionamos asesoría sobre los criterios y requisitos específicos para la residencia permanente, ayudándote a cumplir con todas las condiciones necesarias. Durante todo el proceso, ofrecemos asesoramiento continuo para responder a tus preguntas y resolver cualquier problema que pueda surgir. También te representamos ante las autoridades migratorias, asegurando que tu solicitud se maneje de manera profesional y efectiva."
  },
  {
      id: 'permiso-empleo',
      title: "Permiso de empleo",
      description: "Obtener un permiso de empleo es esencial para trabajar legalmente en un nuevo país. En Liurka Fiscal Consultancy, facilitamos el proceso de obtención de permisos de trabajo, asegurándonos de que cumplas con todos los requisitos legales y regulatorios. Nuestro objetivo es ayudarte a conseguir el permiso necesario para que puedas comenzar a trabajar sin contratiempos.",
      details: "Te asistimos en la preparación y presentación de solicitudes de permiso de empleo, incluyendo la recopilación de documentos necesarios y la completa documentación de tu solicitud. Evaluamos tu caso específico para identificar el tipo de permiso que mejor se adapte a tu situación laboral y te ofrecemos orientación sobre cómo cumplir con todos los requisitos. También te mantenemos informado sobre el estado de tu solicitud y te ayudamos a resolver cualquier problema o pregunta que pueda surgir durante el proceso. Nuestro equipo está aquí para garantizar que tu solicitud de permiso de empleo sea manejada de manera eficiente y efectiva."
  },
  {
      id: 'ciudadania',
      title: "Ciudadanía americana",
      description: "Convertirse en ciudadano americano es un logro importante que abre muchas puertas. En Liurka Fiscal Consultancy, ofrecemos servicios integrales para ayudarte a prepararte para el examen de ciudadanía americana y la entrevista de naturalización. Nuestro objetivo es asegurarnos de que estés completamente preparado para cumplir con los requisitos y completar el proceso con éxito.",
      details: "Nuestro servicio incluye la preparación para el examen de ciudadanía americana, que abarca la revisión de los temas de civismo y la práctica de las preguntas del examen. También ofrecemos asistencia en la preparación de la documentación necesaria para la solicitud de ciudadanía. Te guiamos a través del proceso de preparación para la entrevista de naturalización, proporcionándote simulacros de entrevista y consejos prácticos para ayudarte a responder a las preguntas de manera efectiva. Además, te ofrecemos apoyo continuo durante todo el proceso de solicitud para resolver cualquier inquietud que puedas tener y garantizar que estés bien preparado para cada etapa del proceso de naturalización."
  },
  {
      id: 'reclamaciones',
      title: "Reclamaciones familiares",
      description: "La reunificación familiar es un aspecto crucial de la inmigración, y en Liurka Fiscal Consultancy estamos aquí para ayudarte a presentar solicitudes para la reunificación de familiares. Nuestro objetivo es facilitar el proceso para que puedas reunir a tus seres queridos en el país de manera eficiente y sin contratiempos.",
      details: "Ofrecemos asesoría completa en la preparación y presentación de peticiones para la reunificación familiar. Esto incluye la recopilación de documentación de apoyo, la preparación de formularios necesarios y la presentación de la solicitud ante las autoridades migratorias. Te asistimos en la preparación de pruebas que respalden tu petición y te mantenemos informado sobre el progreso de la solicitud. Además, te ofrecemos orientación sobre cómo cumplir con los requisitos y expectativas de las autoridades migratorias para maximizar las posibilidades de éxito en tu solicitud de reunificación familiar."
  },
  {
      id: 'solicitud-itin',
      title: "Solicitud ITIN",
      description: "El Número de Identificación Personal del Contribuyente (ITIN) es fundamental para cumplir con las obligaciones fiscales en Estados Unidos. En Liurka Fiscal Consultancy, te ayudamos a obtener tu ITIN de manera rápida y eficiente, asegurando que cumplas con todas tus responsabilidades fiscales.",
      details: "Te asistimos en la preparación y presentación de la solicitud de ITIN, incluyendo la recopilación de documentación necesaria y la completa presentación del formulario ante el IRS. Evaluamos tu situación para asegurarnos de que cumplas con todos los requisitos necesarios para obtener el ITIN y te ofrecemos orientación sobre cómo utilizar el número de manera efectiva para cumplir con tus obligaciones fiscales. Además, te mantenemos informado sobre el estado de tu solicitud y te ayudamos a resolver cualquier problema o pregunta que pueda surgir durante el proceso de obtención del ITIN."
  },
  {
      id: 'realtor',
      title: "Servicios de realtor",
      description: "Comprar, vender o alquilar propiedades puede ser un proceso complejo y desafiante. En Liurka Fiscal Consultancy, te ofrecemos servicios integrales de realtor para ayudarte en cada paso del proceso inmobiliario, desde la búsqueda de propiedades hasta la negociación y cierre de transacciones.",
      details: "Te proporcionamos asesoría personalizada en la compra, venta y alquiler de propiedades, considerando tus necesidades y presupuesto. Nuestro equipo de expertos inmobiliarios te ayuda a encontrar la mejor opción en el mercado, te guía a través de las negociaciones y te asiste en la preparación de toda la documentación necesaria para completar las transacciones. Además, te ofrecemos apoyo en la evaluación de propiedades y en la obtención de financiamiento si es necesario. Nuestro objetivo es facilitar el proceso inmobiliario y asegurarnos de que tomes decisiones informadas y seguras en cada etapa del proceso."
  },
  // Agrega los demás servicios aquí
];

const ServiceDetails = () => {
  const { serviceId } = useParams(); // Obtén el ID del servicio desde la URL
  const service = services.find(s => s.id === serviceId); // Encuentra el servicio por ID

  if (!service) {
    return <div className={styles.notFound}>Servicio no encontrado</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{service.title}</h1>
      <p className={styles.description}>{service.description}</p>
      <p className={styles.details}>{service.details}</p>
    </div>
  );
};


export default ServiceDetails;
