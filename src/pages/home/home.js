import Comments from "../../components/comments/comments"
import Hero_Section from "../../components/hero-section/hero-section"
import Home_Header from "../../components/home-header/home-header"
import Our__History from "../../components/our-history/our-history"
import Our__Mision from "../../components/our-mision/our-mision"
import OurTeam from "../../components/our-team/our-team"
import Work__Process from "../../components/service-description/servicedescription"
import styles from "./home.module.css"

export default function Home(){
    return(
        <div className={styles.main__conteiner}>
            <Home_Header/>
            <Hero_Section/>
            <Work__Process/>
            <h2 className={styles.title}>Sobre Liurka Consultoría Fiscal</h2>
            <Our__History/>
            <OurTeam/>
            <Our__Mision/>
            <Comments/>
            
        </div>
    )
}