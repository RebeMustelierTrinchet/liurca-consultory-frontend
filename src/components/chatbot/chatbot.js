import React, { useState } from "react";
import styles from "./chatbot.module.css";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { RiCloseLargeFill } from "react-icons/ri";
import { useSpring, animated } from 'react-spring';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      text: "¡Hola! Soy el asistente virtual de Liurca.",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");

  // Palabras clave y sus respuestas
  const keywords = [
    {
      keyword: "servicios",
      answer:
        "Ofrecemos consultoría fiscal personalizada, incluyendo planificación fiscal y representación en asuntos relacionados con impuestos.",
    },
    {
      keyword: "cita",
      answer:
        "Para agendar una cita, por favor contáctenos a través de nuestro formulario en línea o llámenos directamente. Estaremos encantados de coordinar una reunión a su conveniencia.",
    },
    {
      keyword: "costos",
      answer:
        "Nuestros precios varían dependiendo del servicio requerido. Ofrecemos una consulta inicial gratuita para evaluar sus necesidades y proporcionarle una cotización detallada.",
    },
    {
      keyword: "documentos",
      answer:
        "Dependiendo del servicio que necesite, le solicitaremos documentos relevantes relacionados con su situación fiscal. Le proporcionaremos una lista de documentos necesarios antes de su cita.",
    },
    {
      keyword: "cancelar",
      answer:
        "Si necesita cancelar o reprogramar su cita, por favor notifíquenos con al menos 24 horas de anticipación. Esto nos permitirá ofrecer su espacio a otros clientes.",
    },
    {
      keyword: "urgente",
      answer:
        "Si tiene una pregunta urgente fuera del horario de oficina, por favor envíenos un correo electrónico o deje un mensaje en nuestro buzón de voz. Nos pondremos en contacto con usted lo antes posible.",
    },
    {
      keyword: "depósito",
      answer:
        "Requerimos un depósito inicial para comenzar algunos servicios. El monto y las condiciones del depósito se discutirán durante la consulta inicial. Aceptamos diferentes métodos de pago para su conveniencia.",
    },
    {
      keyword: "confidencialidad",
      answer:
        "Nos comprometemos a mantener la confidencialidad de toda la información que compartan nuestros clientes. Utilizamos medidas de seguridad rigurosas para proteger sus datos personales y profesionales.",
    },
  ];

  const handleSend = () => {
    // 1. Verificar que el campo de texto no esté vacío
    if (input.trim() === "") return; // Si el input está vacío o solo tiene espacios, no hacemos nada y terminamos la función.
  
    // 2. Crear un objeto con el mensaje del usuario
    const userMessage = { 
      text: input, // El texto que el usuario escribió.
      sender: "user" // Indicamos que este mensaje es del usuario.
    };
  
    // 3. Actualizar el estado con el mensaje del usuario
    setMessages((prev) => [...prev, userMessage]); // Agregamos el mensaje del usuario a los mensajes previos.
  
    // 4. Convertir el texto del usuario a minúsculas para hacer la búsqueda más flexible
    const lowerCaseInput = input.toLowerCase(); // Esto asegura que las mayúsculas no interfieran con la búsqueda.
  
    // 5. Buscar palabras clave en el mensaje del usuario
    const matchedKeyword = keywords.find((keyword) => 
      lowerCaseInput.includes(keyword.keyword.toLowerCase()) // Verificamos si alguna palabra clave está en el mensaje del usuario.
    );
  
    // 6. Crear la respuesta del bot en base a si encontramos una palabra clave o no
    const botMessage = matchedKeyword 
      ? { text: matchedKeyword.answer, sender: "bot" } // Si encontramos una palabra clave, usamos la respuesta asociada.
      : { 
          text: "Lo siento, no tengo la respuesta a eso. Por favor, contacta a Liurca para obtener más información.", 
          sender: "bot" // Si no encontramos ninguna palabra clave, respondemos con un mensaje genérico.
        };
  
    // 7. Actualizar el estado con la respuesta del bot
    setMessages((prev) => [...prev, botMessage]); // Agregamos la respuesta del bot a los mensajes previos.
  
    // 8. Limpiar el campo de entrada para permitir que el usuario escriba otro mensaje
    setInput(""); // Después de enviar el mensaje, limpiamos el campo de entrada.
  };
  
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const btnAnimation = useSpring({
    opacity: isOpen ? 0 : 1, // El botón desaparece cuando se abre el chat
    visibility: isOpen ? 'hidden' : 'visible', // Asegura que el botón sea visible
  });

  // Animación para el chatbot
  const menuAnimation = useSpring({
    opacity: isOpen ? 1 : 0, // El chatbot aparece cuando está abierto
    visibility: isOpen ? 'visible' : 'hidden', // Hace que el chatbot sea visible
  });
  return (
    <div>
     <animated.button className={styles.btn_chat_bot} style={btnAnimation} onClick={toggleMenu}><IoChatboxEllipsesOutline className={styles.btn_chatbot_icon} /></animated.button>
    <animated.div className={styles.chatbot} style={menuAnimation}>
        <button className={styles.btn_close_bot} onClick={toggleMenu}><RiCloseLargeFill className={styles.btn_close_icon} /></button>
        <div className={styles.chatbot_messages}>
            {messages.map((msg, index) => (
            <div
                key={index}
                className={`${styles.message} ${
                msg.sender === "bot" ? styles.botMessage : styles.userMessage
                }`}
            >
                {msg.text}
            </div>
            ))}
        </div>
        <div className={styles.chatbot_input}>
            <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe tu pregunta..."
            />
            <button onClick={handleSend}>Enviar</button>
        </div>
    </animated.div>
    </div>
  );
};

export default Chatbot;
