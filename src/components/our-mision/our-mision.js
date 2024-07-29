import styles from "./our-mision.module.css"

export default function Our__Mision(){
    
    const valores = [
        {
        "valor": "Compromiso con la Excelencia",
        "text": "Nos esforzamos por ofrecer un servicio de la más alta calidad en cada aspecto de nuestra consultoría fiscal y legal. Cada proyecto es una oportunidad para superar las expectativas de nuestros clientes."
        },
        {
        "valor": "Integridad y Transparencia",
        "text": "Creemos en la honestidad y la apertura en todas nuestras interacciones. Nuestros clientes pueden confiar en que actuamos con total transparencia y ética en cada paso del proceso."
        },
        {
        "valor": "Atención Personalizada",
        "text": "Cada cliente es único, y nos dedicamos a entender sus necesidades individuales para proporcionar soluciones personalizadas y efectivas."
        },
        {
        "valor": "Profesionalismo",
        "text": "Mantenemos los más altos estándares de profesionalismo y competencia en el campo fiscal y legal. Nuestro equipo está capacitado y comprometido con el desarrollo continuo."
        },
        {
        "valor": "Orientación al Cliente",
        "text": "Nuestra misión es garantizar la satisfacción total de nuestros clientes. Nos esforzamos por brindar una experiencia excepcional y resolver cada desafío con eficacia y precisión."
        },
        {
        "valor": "Innovación Continua",
        "text": "Buscamos constantemente nuevas formas de mejorar nuestros servicios y procesos, manteniéndonos al día con las últimas tendencias y tecnologías en el campo fiscal y legal."
        },
        {
        "valor": "Responsabilidad Social",
        "text": "Estamos comprometidos con contribuir positivamente a nuestra comunidad y actuar de manera responsable en todas nuestras prácticas comerciales."
        }
    ]
    
      
      
      
    return(
        <div className={styles.main__conteiner}>
            <div className={styles.mision}>
                <h3>La Misión que Nos Define</h3>
                <p>En Liurca Consultoría Fiscal, nuestra misión es proporcionar servicios de consultoría fiscal y legal de la más alta calidad 
                    con un enfoque personalizado. Nos dedicamos a ofrecer soluciones efectivas y transparentes que maximicen los beneficios y
                    cumplan con las necesidades específicas de nuestros clientes. Nuestro objetivo es ser un socio confiable en la gestión de 
                    impuestos y asuntos legales, garantizando la satisfacción total a través de un servicio profesional y ético.</p>
            </div>
            <div className={styles.values__conteiner}>
                <h3>Valores que Impulsan Nuestro Éxito</h3>
                <div className={styles.values}>
                    {valores.map((item, index) => (
                        <div className={styles.values_text}>
                            <h6>{item.valor}:</h6>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}