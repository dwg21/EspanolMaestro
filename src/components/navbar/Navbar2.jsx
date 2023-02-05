import React from 'react';
import './navbar.css'
import { useState} from 'react';
import { Link } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';

const Navbar2 = () => {
    const [excercisesDropdown, setExcercisesDropdown] = useState(false);
    const [grammarDropdown, setgrammarDropdown] = useState(false);
    const [hamburgerAcitve, setHamburgerAcitve] = useState(false)

    const handleExcerciesMenu= (e) => {
        e.preventDefault()
        setExcercisesDropdown(!excercisesDropdown)
        setgrammarDropdown(false)
    }

    const handlegrammarMenu= (e) => {
        e.preventDefault()
        setgrammarDropdown(!grammarDropdown)
        setExcercisesDropdown(false)
    }

    const handlehamburgerMenu= (e) => {
        e.preventDefault()
        setHamburgerAcitve(!hamburgerAcitve)
    }

    const closeAllMenus = () => {
      setHamburgerAcitve(false);
      setExcercisesDropdown(false);
      setgrammarDropdown(false);
    }


  return (
    <div class="navigation">
        <div class="nav-container">
        <div class="brand">
          <span>EM </span><SchoolIcon style={{color: 'white',  fontSize: '35px'}} />
          
        

        </div>
        <nav>
            <div class="nav-mobile "><a  onClick = {handlehamburgerMenu} id="nav-toggle" className={hamburgerAcitve== true ? 'active': ''} href="#!"><span ></span></a></div>
                <ul class= {hamburgerAcitve ? "nav-list": "nav-list mobile-hidden"  }>
                    <li>
                    <Link onClick={closeAllMenus} to = '/' >Home</Link>
                    </li>
                    <li>
                        <Link onClick={closeAllMenus} to="/translator">Translator</Link>
                    </li>
                    <li>
                    <a onClick={handleExcerciesMenu} href="#!">Excercises</a>
                     <ul  className = {excercisesDropdown == false ? 'nav-dropdown hidden' : 'nav-dropdown '}>
                        <li>
                        <Link onClick = {closeAllMenus} to = '/conjugation' >Conjuagtion</Link>
                        </li>
                        <li>
                        <Link onClick = {closeAllMenus}  to = '/vocabulary'>Vocabulary</Link>
            </li>
            <li>
              <Link onClick = {closeAllMenus}  to="/story">Story</Link>
            </li>
          </ul>
        </li>

        <li>
          <a onClick = {handlegrammarMenu} href="#!">Grammar</a>
          <ul  className = {grammarDropdown == false ? 'nav-dropdown hidden' : 'nav-dropdown '}>
            <li>
              <Link onClick = {closeAllMenus} to="/past">Past Tense</Link>
            </li>
            <li>
              <Link onClick = {closeAllMenus} to="/future">Future Tense</Link>
            </li>
            <li>
              <a onClick = {closeAllMenus} href="/subjunctive">The Subjunctive</a>
            </li>
          </ul>
        </li>
        <li>
          <a onClick = {closeAllMenus} href="#!">Contact</a>
        </li>
      </ul>
    </nav>
  </div>
  </div>
  )
}

export default Navbar2