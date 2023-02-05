import React from 'react';
import { Footer, Cards } from '..';
import { Box, Stack, Typography } from '@mui/material';
import { banner } from '../../resources';


const Home = () => {
  return (
    <Box p = {2} >
        <h2 align='center' className='heading' >
            Welcome to Español Maestro
        </h2>

        <Typography align='center'>
        Español Maestro is your number 1 tool for learnig spanish. Featuirng Several unique excercises desiged to help reinforce your memory and asist your learning. 
        </Typography>
        <Cards />

        <Box sx = {{textAlign: 'center'}} p = {4}  >
            <p>    
                More Features coming soon. </p>
            </Box>
            <Footer/>
    </Box>
    
  )
}

export default Home