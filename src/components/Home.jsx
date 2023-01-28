import React from 'react';
import { Footer, Cards } from '.';
import { Box, Stack, Typography } from '@mui/material';
import { banner } from '../resources';


const Home = () => {
  return (
    <Box p = {2} >
        <h2 align='center' className='heading' >
            Welcome to Español Maestro
        </h2>

        <Typography align='center'>
        Español Maestro is your number 1 tool for learnig spanish. Featuirng Several unique excercises desiged to help reinforce your memory and asist your leanring. 
        </Typography>
        <Cards />

        <Box p = {4}  >
            <p>    
                There are many variations of passages of Lorem Ipsum available, but
                the majority have suffered alteration in some form, by injected
                humour, or randomised words which don’t look even slightly believable.</p>
            </Box>
            <Footer/>
    </Box>
    
  )
}

export default Home