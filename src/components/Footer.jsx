import React from 'react'
import { Facebook, Instagram, Twitter, Pinterest, MailOutline, Phone, Room} from '@mui/icons-material';
import './footer.css'

const Footer = () => {
    return (
      <div className='footer-container'>
          <div className='footer-container-left'>
              <h1>Espańol Maestro</h1>
              <p>
                There are many variations of passages of Lorem Ipsum available, but
                the majority have suffered alteration in some form, by injected
                humour, or randomised words which don’t look even slightly believable.
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
              <li>Home</li>
              <li>Cart</li>
              <li>Mans Fashion</li>
              <li>Womens Fashion</li>
              <li>Accessories</li>
              <li>My Account</li>
              <li>Order Tracking</li>
              <li>Wishlist</li>
              <li>Terms</li>
            </ul>
  
  
          </div>
  
          <div className='footer-container-right'>
            <h3>Contact</h3>
            <div className="contactItem"><Room style={{marginRight:"10px"}}/>134 Sonnenallen, Neuokolln, Berlin</div>
            <div className="contactItem"><Phone style={{marginRight:"10px"}}/>+23 7656 7623 23</div>
            <div className="contactItem"><MailOutline style={{marginRight:"10px"}} />Customerservices@Lapa.com </div>
            <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" />
  
          </div>
  
  
      </div>
      
    )
  }
export default Footer