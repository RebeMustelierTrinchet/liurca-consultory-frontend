import styles from './service-descripsion.module.css'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const item = [
    {
        title: "Impuestos personales y de negocios",
        process_first_title: "Asesoría Fiscal: ",
        process_first: "Maximizamos tus beneficios fiscales y aseguramos el cumplimiento con todas las regulaciones vigentes.",
        process_second_title: "Preparación y Presentación: ",
        process_second: "Nos encargamos de todo el proceso de preparación y presentación de impuestos.",
        url: "/impuestos"
    },
    {
        title: "Aperturas de compañía",
        process_first_title: "Asesoramiento Legal: ",
        process_first: "Te ayudamos a elegir la estructura legal adecuada para tu negocio.",
        process_second_title: "Documentación: ",
        process_second: "Nos encargamos de la presentación de todos los documentos necesarios para la constitución de tu empresa.",
        url: "/aperturas"
    },
    {
        title: "Asilo político (I-220A y parole)",
        process_first_title: "Apoyo Legal: ",
        process_first: "Asistimos en la solicitud de asilo político y permisos de entrada humanitaria.",
        process_second_title: "Documentación: ",
        process_second: "Proporcionamos orientación y apoyo en la preparación de la documentación requerida.",
        url: "/asilo"
    },
    {
        title: "Residencia permanente",
        process_first_title: "Preparación de Formularios: ",
        process_first: "Te ayudamos en la preparación de todos los formularios necesarios para la residencia permanente.",
        process_second_title: "Representación: ",
        process_second: "Te representamos ante las autoridades migratorias durante todo el proceso.",
        url: "/residencia"
    },
    {
        title: "Permiso de empleo",
        process_first_title: "Solicitud de Permiso: ",
        process_first: "Facilitamos la obtención de permisos de trabajo en Estados Unidos.",
        process_second_title: "Cumplimiento de Requisitos: ",
        process_second: "Aseguramos que cumplas con todos los requisitos y plazos necesarios.",
        url: "/permiso-empleo"
    },
    {
        title: "Ciudadanía americana",
        process_first_title: "Preparación para el Examen: ",
        process_first: "Te preparamos para el examen de ciudadanía americana.",
        process_second_title: "Asistencia en la Entrevista: ",
        process_second: "Proveemos asistencia durante la entrevista de naturalización.",
        url: "/ciudadania"
    },
    {
        title: "Reclamaciones familiares",
        process_first_title: "Reunificación Familiar: ",
        process_first: "Asistimos en la presentación de peticiones para la reunificación familiar.",
        process_second_title: "Proceso Eficiente: ",
        process_second: "Garantizamos un proceso eficiente y sin contratiempos.",
        url: "/reclamaciones"
    },
    {
        title: "Solicitud ITIN",
        process_first_title: "Obtención de ITIN: ",
        process_first: "Facilitamos la obtención del Número de Identificación Personal del Contribuyente (ITIN).",
        process_second_title: "Cumplimiento Fiscal: ",
        process_second: "Aseguramos el cumplimiento de tus obligaciones fiscales.",
        url: "/solicitud-itin"
    },
    {
        title: "Servicios de realtor",
        process_first_title: "Compra y Venta de Propiedades: ",
        process_first: "Te asesoramos en la compra, venta y alquiler de propiedades.",
        process_second_title: "Asesoría Personalizada: ",
        process_second: "Encontramos la mejor opción inmobiliaria según tus necesidades y presupuesto.",
        url: "/realtor"
    }
];

export default function Work__Process(){
    return(
        <div className={styles.main__conteiner}>
             <h2 className={styles.title}>{'< Como Trabajamos >'}</h2>
            <h3 className={styles.subtitle}>Nuestro Compromiso: Claridad y Satisfacción en Cada Etapa del Proceso</h3>
            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                    '@0.00': {
                        slidesPerView: 1,
                        spaceBetween: 10,
                      },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}
                modules={[Pagination]}
                className={styles.mySwiper}
            >
                {item.map((item, index) => (
                    <SwiperSlide className={styles.swiper__slide} key={index}>
                       <div className={styles.backgrond__container}></div>
                        <div className={styles.card__container}>
                            <div className={styles.header}>
                                <Card.Text className={styles.title}>{'<Liurca Fiscal Consultancy>'}</Card.Text>
                                <Card.Title className={styles.subtitle}>{item.title}</Card.Title>
                            </div>
                            <Card className={styles.sub__card__container}>
                                <Card.Body>
                                    <Card.Title className={styles.important_text}>{item.process_first_title}<p className={styles.text}>{item.process_first}</p></Card.Title>
                                    <Card.Title className={styles.important_text}>{item.process_second_title}<p className={styles.text}>{item.process_second}</p></Card.Title>
                                </Card.Body>
                            </Card>
                            <Button variant="primary" href={item.url} className={styles.more_info_button}>Más información</Button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            
        </div>
    )
}
