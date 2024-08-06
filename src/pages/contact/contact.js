import React, { useState } from "react";
import styles from "./contact.module.css";
import emailjs from "emailjs-com";
import avatar from './../../images/WhatsApp Image 2024-07-21 at 11.54.12.jpeg'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    number:"",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("¡Mensaje enviado con éxito!");
        },
        (error) => {
          console.log(error.text);
          alert("Hubo un problema al enviar el mensaje. Por favor, inténtelo de nuevo.");
        }
      );

    // Resetear el formulario después de enviarlo
    setFormData({
      name: "",
      email: "",
      message: "",
      number:"",
    });
  };

  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactInfo}>
        <img
          src={avatar}
          alt="Imagen de contacto"
          className={styles.contactImage}
        />
        <div className={styles.infoText}>
          <h1>Contacto</h1>
          <p><strong>Teléfono:</strong> 832-722-5437</p>
          <p><strong>Email:</strong> liurca.consultoria@gmail.com</p>
          <p><strong>Horas de trabajo:</strong> Lunes a Viernes, 9:00 AM - 5:00 PM</p>
          <div className={styles.socialMedia}>
            <a href="URL_DE_FACEBOOK" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="URL_DE_TWITTER" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="URL_DE_LINKEDIN" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className={styles.formContainer}>
        <h2>Envíanos un mensaje</h2>
        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <label>
            Nombre:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Correo Electrónico:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
                Número de contacto:
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ marginRight: '5px' }}>+1</span>
                    <input
                    type="tel"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                    pattern="\d*"
                    required
                    style={{ flex: 1 }}
                    />
                </div>
            </label>
          <label>
            Mensaje:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </label>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}
