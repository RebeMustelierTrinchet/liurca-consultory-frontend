import React from 'react';
import styles from './footer.module.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <h3 className={styles.title}>Liurca Consultoría Fiscal</h3>
                        <p className={styles.description}>
                            Ofrecemos soluciones fiscales y legales personalizadas para satisfacer las necesidades de nuestros clientes.
                        </p>
                    </div>
                    <div className={styles.col}>
                        <h4 className={styles.subtitle}>Enlaces rápidos</h4>
                        <ul className={styles.list}>
                            <li className={styles.listItem}><a href="/about-us" className={styles.link}>Sobre nosotros</a></li>
                            <li className={styles.listItem}><a href="/services" className={styles.link}>Servicios</a></li>
                            <li className={styles.listItem}><a href="/contact" className={styles.link}>Contacto</a></li>
                            <li className={styles.listItem}><a href="/faq" className={styles.link}>Preguntas frecuentes</a></li>
                        </ul>
                    </div>
                    <div className={styles.col}>
                        <h4 className={styles.subtitle}>Servicios</h4>
                        <ul className={styles.list}>
                            <li className={styles.listItem}><a href="/impuestos" className={styles.link}>Impuestos personales y de negocios</a></li>
                            <li className={styles.listItem}><a href="/aperturas" className={styles.link}>Aperturas de compañía</a></li>
                            <li className={styles.listItem}><a href="/asilo" className={styles.link}>Asilo político</a></li>
                            <li className={styles.listItem}><a href="/residencia" className={styles.link}>Residencia permanente</a></li>
                        </ul>
                    </div>
                    <div className={styles.col}>
                        <h4 className={styles.subtitle}>Síguenos</h4>
                        <div className={styles.socialIcons}>
                            <a href="https://www.facebook.com" className={styles.socialLink}><FaFacebookF /></a>
                            <a href="https://www.twitter.com" className={styles.socialLink}><FaTwitter /></a>
                            <a href="https://www.instagram.com" className={styles.socialLink}><FaInstagram /></a>
                            <a href="https://www.linkedin.com" className={styles.socialLink}><FaLinkedinIn /></a>
                        </div>
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    <p className={styles.copy}>&copy; 2024 Liurca Consultoría Fiscal. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
