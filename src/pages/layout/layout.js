import React, { useState } from 'react';
import styles from "./layout.module.css";
import NavBar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import Chatbot from '../../components/chatbot/chatbot';

export default function Layout({children}){
    
    return(
        <div className={styles.body}>
            
            <NavBar/>
            <div className={styles.conteiner}>
                {children}
            </div>
            <Chatbot/>
            <Footer />
        </div>
    )
}