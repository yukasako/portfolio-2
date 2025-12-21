import Navbar from '../Navbar/Navbar';
import styles from './Header.module.css';
import { FadeIn } from '../../UI/FadeIn';

function Header() {
  return (
    <header className={styles.header}>
      <FadeIn>
        <h1>
          Yukako Sakozono <br />
          Isacson
        </h1>
      </FadeIn>
      <Navbar></Navbar>
    </header>
  );
}

export default Header;
