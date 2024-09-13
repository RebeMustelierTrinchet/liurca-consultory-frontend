import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import styles from './comments.module.css';

export default function Comments() {
  const comentarios = [
    {
      text: "Liurka es una profesional excepcional. Su conocimiento en impuestos y su atención al detalle me dieron una gran tranquilidad durante la temporada fiscal.",
      author: "Carlos M.",
    },
    {
      text: "Gracias a Liurka, obtuve una devolución de impuestos mayor a la esperada. Su asesoramiento y habilidades son incomparables.",
      author: "María P.",
    },
    {
      text: "La consultoría de Liurka es de primer nivel. Su experiencia y dedicación se reflejan en los resultados excepcionales que ofrece.",
      author: "José R.",
    },
    {
      text: "Liurka hizo que todo el proceso de declaración de impuestos fuera sencillo y sin estrés. Recomiendo sus servicios a cualquiera que busque un experto en impuestos.",
      author: "Ana L.",
    },
    {
      text: "La atención personalizada y el profundo conocimiento de Liurka hicieron que todo el proceso de notaría y declaración de impuestos fuera rápido y eficiente.",
      author: "Luis F.",
    },
  ];

  return (
    <div className={styles.mainCont}>
      <h1 className={styles.title}>Testimonios de Clientes</h1>
      <h2 className={styles.subtitle}>Lo que dicen nuestros clientes</h2>
      <Swiper className={styles.swiper__container}>
        {comentarios.map((item, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}> 
            <div className={styles.comments__container}>
                {/* <div>estrellas</div> */}
              <p className={styles.text}>{item.text}</p>
              <p className={styles.author}>{item.author}</p>
            </div>  
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
