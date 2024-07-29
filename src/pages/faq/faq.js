import React from "react";
import styles from "./faq.module.css";
import Accordion from "react-bootstrap/Accordion";

const ITEMS = [
  {
    title: "¿Qué servicios ofrecen?",
    body: "Ofrecemos consultoría fiscal y legal personalizada, incluyendo planificación fiscal, asesoramiento legal y representación en asuntos fiscales y legales."
  },
  {
    title: "¿Cómo puedo agendar una cita?",
    body: "Para agendar una cita, por favor contáctenos a través de nuestro formulario en línea o llámenos directamente. Estaremos encantados de coordinar una reunión a su conveniencia."
  },
  {
    title: "¿Cuál es el costo de los servicios?",
    body: "Nuestros precios varían dependiendo del servicio requerido. Ofrecemos una consulta inicial gratuita para evaluar sus necesidades y proporcionarle una cotización detallada."
  },
  {
    title: "¿Qué documentos necesito para la consulta?",
    body: "Dependiendo del servicio que necesite, le solicitaremos documentos relevantes relacionados con su situación fiscal o legal. Le proporcionaremos una lista de documentos necesarios antes de su cita."
  },
  {
    title: "¿Qué sucede si necesito cancelar o reprogramar mi cita?",
    body: "Si necesita cancelar o reprogramar su cita, por favor notifíquenos con al menos 24 horas de anticipación. Esto nos permitirá ofrecer su espacio a otros clientes."
  },
  {
    title: "¿Qué hago si tengo una pregunta urgente fuera del horario de oficina?",
    body: "Si tiene una pregunta urgente fuera del horario de oficina, por favor envíenos un correo electrónico o deje un mensaje en nuestro buzón de voz. Nos pondremos en contacto con usted lo antes posible."
  },
  {
    title: "¿Qué políticas tienen respecto a los depósitos y pagos?",
    body: "Requerimos un depósito inicial para comenzar algunos servicios. El monto y las condiciones del depósito se discutirán durante la consulta inicial. Aceptamos diferentes métodos de pago para su conveniencia."
  },
  {
    title: "¿Ofrecen servicios para empresas?",
    body: "Sí, ofrecemos servicios de consultoría fiscal y legal tanto para individuos como para empresas. Podemos ayudarle con la planificación fiscal corporativa, cumplimiento legal y otros servicios relacionados."
  },
  {
    title: "¿Cómo garantizan la confidencialidad de mi información?",
    body: "Nos comprometemos a mantener la confidencialidad de toda la información que compartan nuestros clientes. Utilizamos medidas de seguridad rigurosas para proteger sus datos personales y profesionales."
  }
];

export default function Faqs() {

  return (
    <div className={styles.contenedorPrincipal}>
      <Accordion defaultActiveKey="1" className={styles.contAccordion}>
        {ITEMS.map((item, itemIndex) => {
          return (
            <Accordion.Item className={styles.accordionItem} eventKey={(itemIndex + 1).toString()} key={itemIndex}>
              <Accordion.Header className={styles.accordionItemHeader}>{item.title}</Accordion.Header>
              <Accordion.Body>
                {item.body}
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </div>
  );
}
