import React from "react";
import styles from "./services.module.css";
import { useEffect, useRef } from 'react';

const services = {
  impuestosPersonalesYDeNegocios: {
    title: "Impuestos Personales y de Negocios",
    description: [
      {
        type: "Impuestos Personales",
        text: "Ofrecemos asesoramiento y preparación de declaraciones de impuestos personales, optimización de deducciones y créditos, y planificación fiscal para maximizar su retorno o minimizar su obligación tributaria."
      },
      {
        type: "Impuestos de Negocios",
        text: "Brindamos servicios de contabilidad y preparación de impuestos para empresas, incluyendo la elaboración de declaraciones fiscales corporativas, planificación tributaria estratégica y cumplimiento con las regulaciones fiscales locales y federales."
      }
    ]
  },
  aperturasDeCompania: {
    title: "Aperturas de Compañía",
    description: [
      {
        type: "Proceso",
        text: "Asesoramos en la elección de la estructura empresarial adecuada (LLC, Corporación, etc.), ayudamos con el registro de la empresa, y gestionamos la obtención de los permisos y licencias necesarios."
      },
      {
        type: "Beneficios",
        text: "Facilita el cumplimiento legal y fiscal desde el principio, mejora la credibilidad y protección personal, y optimiza la estructura fiscal y operativa de su negocio."
      }
    ]
  },
  asiloPolitico: {
    title: "Asilo Político (I-220A y Parole)",
    description: [
      {
        type: "Asilo Político (I-220A)",
        text: "Asistimos en la preparación y presentación de solicitudes de asilo político, proporcionamos orientación legal durante el proceso y representamos a nuestros clientes en audiencias y procedimientos relacionados."
      },
      {
        type: "Parole",
        text: "Ofrecemos asistencia en la solicitud de parole, que puede permitir la entrada temporal a los EE.UU. mientras se resuelve la solicitud de asilo u otros trámites legales."
      }
    ]
  },
  residenciaPermanente: {
    title: "Residencia Permanente",
    description: [
      {
        type: "Proceso",
        text: "Guiamos a los clientes a través del proceso de solicitud de residencia permanente (Green Card), que incluye la preparación de documentos, presentación de solicitudes y respuesta a solicitudes de información adicional."
      },
      {
        type: "Requisitos",
        text: "Requisitos típicos incluyen tener una base legal para la solicitud (como matrimonio con un ciudadano, empleo, asilo, etc.), cumplir con los criterios de elegibilidad y pasar exámenes médicos y de seguridad."
      }
    ]
  },
  permisoDeEmpleo: {
    title: "Permiso de Empleo",
    description: [
      {
        type: "Solicitud",
        text: "Asesoramos en la preparación y presentación de solicitudes de permiso de empleo, que pueden ser necesarios para trabajar legalmente en los EE.UU. como trabajador temporal o permanente."
      },
      {
        type: "Documentación",
        text: "Ayudamos a recopilar y presentar la documentación necesaria, incluyendo formularios específicos y evidencia de elegibilidad."
      }
    ]
  },
  ciudadaniaAmericana: {
    title: "Ciudadanía Americana",
    description: [
      {
        type: "Proceso",
        text: "Ofrecemos asistencia en la preparación de la solicitud de ciudadanía americana, que incluye la recopilación de documentos, preparación para el examen de ciudadanía y entrevista, y orientación durante todo el proceso de naturalización."
      },
      {
        type: "Requisitos",
        text: "Generalmente incluyen ser residente permanente por un período específico, demostrar buen carácter moral, y pasar un examen de civismo y lengua inglesa."
      }
    ]
  },
  reclamacionesFamiliares: {
    title: "Reclamaciones Familiares",
    description: [
      {
        type: "Servicios",
        text: "Asesoramos en la presentación de reclamaciones familiares, que pueden incluir casos de derecho de familia, custodia de hijos, pensión alimenticia y otras cuestiones relacionadas con el bienestar familiar."
      },
      {
        type: "Asistencia",
        text: "Proporcionamos representación legal y orientación para resolver disputas familiares y asegurar el cumplimiento de las decisiones judiciales."
      }
    ]
  },
  solicitudITIN: {
    title: "Solicitud ITIN",
    description: [
      {
        type: "Solicitud",
        text: "Asistimos en la preparación y presentación de solicitudes para obtener un Número de Identificación del Contribuyente (ITIN) para aquellos que necesitan cumplir con obligaciones fiscales en EE.UU. pero no tienen un número de Seguro Social."
      },
      {
        type: "Documentación",
        text: "Ayudamos a recopilar y presentar la documentación necesaria para la solicitud del ITIN, incluyendo identificación personal y evidencia de la necesidad del número para fines fiscales."
      }
    ]
  },
  segurosDeVidaYSaludObamacare: {
    title: "Seguros de Vida y Salud Obamacare",
    description: [
      {
        type: "Servicios",
        text: "Ofrecemos asesoramiento y asistencia en la inscripción a seguros de vida y salud bajo el programa Obamacare. Esto incluye la evaluación de las necesidades de cobertura, la selección del plan adecuado, y el apoyo en el proceso de inscripción."
      },
      {
        type: "Beneficios",
        text: "Aproveche nuestro conocimiento de los programas de seguros y las regulaciones para obtener la mejor cobertura disponible a través de Obamacare, garantizando así la protección financiera y de salud para usted y su familia."
      }
    ]
  },
};



export default function Services() {
  return (
    <div className={styles.container}>
      {Object.entries(services).map(([key, { title, description }]) => (
        <div className={styles.serviceCard} key={key}>
          <h2 className={styles.serviceTitle}>{title}</h2>
          <div className={styles.serviceDescription}>
            {description.map((item, index) => (
              <div className={styles.serviceDetail} key={index}>
                <h4 className={styles.serviceType}>{item.type}:</h4>
                <p className={styles.serviceText}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
