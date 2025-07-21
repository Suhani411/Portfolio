import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          className={styles.aboutImage}
          src={getImageUrl('about/aboutImage.png')}
          alt="Me sitting with a laptop"
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl('about/cursorIcon.png')} alt="cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Software Developer</h3>
              <p>
                I’m an Information Technology graduate passionate about software development. I’ve worked on real-world projects involving secure API integrations, scalable backend services, and intuitive user interfaces.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl('about/serverIcon.png')} alt="server icon" />
            <div className={styles.aboutItemText}>
              <h3>Full-Stack Engineer</h3>
              <p>
                From React and Tailwind CSS on the frontend to Node.js, Springboot, and PostgreSQL on the backend — I build complete, efficient, and maintainable web applications with real-world use cases.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl('about/uiIcon.png')} alt="shield icon" />
            <div className={styles.aboutItemText}>
              <h3>Cybersecurity Enthusiast</h3>
              <p>
                With experience in vulnerability scanning tools like OWASP ZAP and Nmap, I focus on secure coding, threat modeling, and building systems with security at their core.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
