import React from 'react';
import { Box } from '@mui/material';
import './cards.css'

const Cards = () => {
  return (
    <Box className='body'>
        <div className="page-content">
            <div className="card">
                <div className="content">
                    <h2 className="title">Translation</h2>
                    <p className="copy">Using advance AI transltions from DLmind , translate between English and Spanish </p>
                    <button className="btn">Vamos!</button>
                </div>
            </div>
            <div className="card">
                <div className="content">
                    <h2 className="title">Vocabulary Practice</h2>
                    <p className="copy">Remebering Vocabualry can be one of the hardest things about learing a langauge.</p>
                    <button className="btn">Vamos!</button>
            </div>
        </div>

        <div className="card">
            <div className="content">
                <h2 className="title">Conjugation Practice</h2>
                <p className="copy">It's the desert you've always dreamed of</p>
                <button className="btn">Vamos!</button>
            </div>
        </div>

        <div className="card">
             <div className="content">
                <h2 className="title">Explore The Galaxy</h2>
                <p className="copy">Seriously, straight up, just blast off into outer space today</p>
                <button className="btn">Vamos!</button>
            </div>
        </div>
        </div> 
    </Box>
  )
}

export default Cards





