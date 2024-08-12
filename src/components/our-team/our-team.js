import React from 'react';
import styles from './our-team.module.css';
import avatar from './../../images/WhatsApp Image 2024-07-21 at 11.54.12.jpeg'

export default function OurTeam() {
    return (
        <div className={styles.ourTeam}>
            <h2 className={styles.title}>Conoce a Liurka</h2>
            <div className={styles.member}>
                <img src={avatar} alt="Liurka" className={styles.photo} />
                <div className={styles.info__conteiner}>
                    <h3 className={styles.name}>Liurka</h3>
                    <p className={styles.education}>Título: Federal Tax School</p>
                    <p className={styles.certification}>Certificación: Notary Public Commission en Texas</p>
                    <p className={styles.bio}>
                        Con un título en Federal Tax School y una certificación de Notary Public Commission en Texas, Liurca cuenta con una sólida experiencia en el campo fiscal y legal. 
                        Su compromiso con la excelencia y la atención personalizada la convierte en una profesional de confianza para manejar todas sus necesidades fiscales y legales.
                    </p>
                </div>
            </div>
        </div>
    );
}
