import styles from "./our-history.module.css"
import logo from "./../../images/logo.png"

export default function Our__History(){
    return(
        <div className={styles.main__conteiner}>

            <h3 className={styles.title}>Nuestra Historia:</h3>
            <div className={styles.sub__conteiner}>
                <img className={styles.logo_image} src={logo} alt={"Liurka Liurka Consultoría Fiscal Logo"} />
                <p className={styles.text}>Liurka Consultoría Fiscal fue fundada por Liurka con la misión de proporcionar asesoramiento fiscal y 
                    legal de alta calidad a individuos y empresas. Con años de experiencia en el campo y una dedicación excepcional, Liurka se 
                    ha convertido en una referencia de prestigio y confiabilidad en la industria. Su compromiso es brindar soluciones personalizadas 
                    que satisfagan las necesidades únicas de cada cliente, asegurando transparencia y satisfacción en cada paso del proceso.
                </p>
            </div>
            <div>
                <button className={styles.btn_contac_us}><a href="/services" className={styles.link}>Servicios</a></button>
            </div>
        </div>
    )
}