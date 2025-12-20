import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrush } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <>
      <nav id='navbar'>
        <FontAwesomeIcon icon={faBrush} className='hamburger' />
        <div id='navbar-links' className='displayNone'>
          <a href='#introduction'>About</a>
          <a href='#skills'>Abilities</a>
          <a href='#projects'>Projects</a>
          <a href='#history'>History</a>
          <a href='./img/material/CV.pdf'>CV</a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
