import React from 'react'
import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';

const Hero = () => {
  return <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Suhani</h1>
        <p className={styles.description}>I am a developer</p>
        <a href="mailto:suhani4shinde@gmail.com" className={styles.contactBtn}>Contact Me</a>
    </div>
    <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImage} />
    <div> className={StyleSheet.topBlur}</div>
    <div> className={StyleSheet.bottomBlur}</div>
  </section>
}
 
export default Hero
