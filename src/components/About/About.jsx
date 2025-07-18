import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './About.module.css';

const About = () => {
  return ( <section className={styles.container} id='about'>
    <h2 className={styles.title}>About</h2>
    <div className={styles.content}> 
        <img className={styles.aboutImage}
        src={getImageUrl("about/aboutImage.png")} 
        alt="Me sitting with a laptop" 
        />
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={getImageUrl('about/cursorIcon.png')} alt="cursor icon" />
                <div className={styles.aboutItemText}>
                    <h3>Frontend Developer</h3>
                    <p>
                        I am a frontend developer with experience in building responsive and optimised sites
                    </p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl('about/serverIcon.png')} alt="server icon" />
                <div className={styles.aboutItemText}>
                    <h3>Backend Developer</h3>
                    <p>
                        I have experience developing fast and optimised backend systems and APIs.
                    </p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl('about/uiIcon.png')} alt="cursor icon" />
                <div className={styles.aboutItemText}>
                    <h3>Cyber Security Enthusiast</h3>
                    <p>
                        I am a developer with insterst in developing secure websites. Pranjal
                    </p>
                </div>
            </li>
        </ul>
    </div>
  </section>
  )
}

export default About
