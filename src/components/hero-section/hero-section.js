import styles from "./hero-section.module.css"
import logo from "./../../images/logo.png"

export default function Hero_Section(){
    return(
        <div className={styles.main__conteiner}>
            <h3 className={styles.title}>Transforma Tu Futuro Financiero con Soluciones Expertas</h3>
            <div className={styles.sub__conteiner}>
                <p className={styles.text}>En Liurca, ofrecemos asesoría integral en contabilidad y servicios fiscales para 
                    individuos y empresas. Desde la gestión de impuestos y aperturas de compañías 
                    hasta asesoramiento en inmigración y reclamaciones familiares, estamos aquí para 
                    simplificar tus procesos financieros y legales con profesionalismo y atención 
                    personalizada. Confía en nuestra experiencia para alcanzar tus metas.
                </p>
                <img className={styles.logo_image} src={logo} alt={"Liurca Liurca Consultoría Fiscal Logo"} />
            </div>
            <div>
                <button className={styles.btn_contac_us}>Contactanos</button>
            </div>
        </div>
    )
}