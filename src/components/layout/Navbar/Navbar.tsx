import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrush } from '@fortawesome/free-solid-svg-icons';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <FontAwesomeIcon icon={faBrush} className={styles.hamburger} />

      <div className={styles.navbarLinks}>
        <a href='#introduction'>About</a>
        <a href='#skills'>Abilities</a>
        <a href='#projects'>Projects</a>
        <a href='#history'>History</a>
        <a href='./img/material/CV.pdf'>CV</a>
      </div>
    </nav>
  );
}

export default Navbar;
