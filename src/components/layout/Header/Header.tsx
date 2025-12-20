import Navbar from '../Navbar/Navbar';
import styles from './Header.module.css';

function Header() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Yukako Sakozono <br />
          Isacson
        </h1>
        <Navbar></Navbar>
      </header>
    </>
  );
}

export default Header;
