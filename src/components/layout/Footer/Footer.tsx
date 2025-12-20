import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.contacts}>
        <a
          href='mailto:yukako.sakozono.isacson@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon icon={faPaperPlane} className={styles.icon} />
        </a>

        <a
          href='https://www.linkedin.com/in/yukako-sakozono/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
        </a>

        <a
          href='https://github.com/yukasako'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon icon={faGithub} className={styles.icon} />
        </a>

        <p>©2024 Yukako Sakozono Isacson</p>
      </div>
    </footer>
  );
}

export default Footer;
