import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrush } from '@fortawesome/free-solid-svg-icons';
import { LanguageSelector } from '../../UI/LanguageSelector';
import styles from './Navbar.module.css';

function Navbar() {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((v) => !v);
  const close = () => setOpen(false);

  return (
    <nav className={styles.navbar}>
      <FontAwesomeIcon
        icon={faBrush}
        className={styles.hamburger}
        onClick={toggle}
        aria-label='Open menu'
      />

      <div
        className={`${styles.navbarLinks} ${open ? '' : styles.displayNone}`}
        onClick={close}
      >
        <a href='#introduction'>About</a>
        <a href='#skills'>Abilities</a>
        <a href='#projects'>Projects</a>
        <a href='#history'>History</a>
        <a href='./img/material/CV.pdf'>CV</a>
        <LanguageSelector></LanguageSelector>
      </div>
    </nav>
  );
}

export default Navbar;
