import React from 'react';
import { Box } from '@mui/material';
import './cards.css';
import { Link } from 'react-router-dom';

const Cards = () => {
  return (
    <Box className='body'>
        <div className="page-content">
            <div className="card">
                <div className="content">
                    <h2 className="title">Translation</h2>
                    <p className="copy">Using advance AI technology translate between English and Spanish </p>
                    <Link to = '/translator' ><button className="btn">Vamos!</button></Link>
                </div>
            </div>
            <div className="card">
                <div className="content">
                    <h2 className="title">Vocabulary Practice</h2>
                    <p className="copy">Remebering vocabulary can be one of the hardest things about learing a langauge.</p>
                    <Link to = '/vocabulary' ><button className="btn">Vamos!</button></Link>
            </div>
        </div>

        <div className="card">
            <div className="content">
                <h2 className="title">Conjugation Practice</h2>
                <p className="copy">Practice and perfect your spanish verb conjugations</p>
                <Link to = '/conjugation' ><button className="btn">Vamos!</button></Link>
            </div>
        </div>

        <div className="card">
             <div className="content">
                <h2 className="title">Story</h2>
                <p className="copy">Learn Spanish with Stories</p>
                <Link to = 'story'><button className="btn">Vamos!</button></Link>
            </div>
        </div>
        </div> 
    </Box>
  )
}

export default Cards






