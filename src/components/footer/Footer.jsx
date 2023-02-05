import React from 'react'
import { Facebook, Instagram, Twitter, Pinterest, MailOutline, Phone, Room} from '@mui/icons-material';
import './footer.css'
import SchoolIcon from '@mui/icons-material/School';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
      <div className='footer-container'>
          <div className='footer-container-left'>
              <h1>Espańol Maestro</h1>
              <p>
                Español Maestro is a porfolio project and concept for an interactive web app that helps you learn
                spanish through several different unique excercises. 
              </p>
              <div className="socialContainer">
                <div className="socialIcon"><Facebook /></div>
                <div className="socialIcon"><Instagram /></div>
                <div className="socialIcon"><Twitter /></div>
                <div className="socialIcon"><Pinterest /></div>
              </div>
          </div>
  
          <div className='footer-container-center'>
            <h3>Useful Links</h3>
            <ul> 
              <Link to = '/'><li>Home</li></Link>
              <Link to = '/vocabulary'>  <li>Vocabulary Excercise</li></Link>
              <Link to = '/conjugation' ><li>Conjugation Excercise</li></Link>
              <Link to = '/story'><li>Story Excercise</li></Link>
              </ul>
            <ul>
              <Link to = '/vocabulary'><li>Past tense </li></Link>
              <Link to = '/past'><li>Past Tense</li></Link>
              <Link to = '/future'><li>Future Tense</li></Link>
              <Link to = '/subjunctive'><li>The Subjunctive</li></Link>
              <li>Contact</li>
            </ul>
  
  
          </div>
  
          <div className='footer-container-right'>
            <h3>Contact</h3>
            <div className="contactItem"><Room style={{marginRight:"10px"}}/>134 Sonnenallen, Neuokolln, Berlin</div>
            <div className="contactItem"><Phone style={{marginRight:"10px"}}/>+23 7656 7623 23</div>
            <div className="contactItem"><MailOutline style={{marginRight:"10px"}} />help@españolmaestro.com </div>
            <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" />
  
          </div>
  
  
      </div>
      
    )
  }
export default Footer