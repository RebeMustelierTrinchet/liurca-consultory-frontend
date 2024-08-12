import styles from "./home-header.module.css"
import { FaBars, FaTimes, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import avatar from "./../../images/WhatsApp Image 2024-07-21 at 11.54.12.jpeg"

export default function Home_Header(){
    return(
        <div className={styles.main__conteiner}>
            <div className={styles.right__conteiner}>
                <h1 className={styles.title}>LiurKa Consultoría Fiscal</h1>
                <p className={styles.subtitle}>Aseguramos Tu Éxito Financiero con Servicios Contables y Legales de Primera Clase</p>
                <p className={styles.subtitle}>Por razones legales y normativas, nos vemos en la obligación de informar que no ofrecemos asesoría legal en ningún ámbito.</p>
                <div className={styles.socialMedia}>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook className={styles.icon} size={30} /></a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter className={styles.icon} size={30} /></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram className={styles.icon} size={30} /></a>
                </div>
            </div>
            <div>
                <img className={styles.avatar_image} src={avatar} alt={"Liurca Liurca Consultoría Fiscal"} />
            </div>
        </div>
    )
}