import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { FaBars, FaTimes, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import styles from './navbar.module.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuAnimation = useSpring({
    transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className={styles.menuButton} onClick={toggleMenu}>
        {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      <animated.nav style={menuAnimation} className={styles.slidingMenu}>
        <ul className={styles.navLinks}>
          <li><a href="/">Home</a></li>
          <li><a href="/faqs">FAQ</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <div className={styles.socialMedia}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook size={30} /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter size={30} /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={30} /></a>
        </div>
      </animated.nav>
    </div>
  );
};

export default NavBar;
