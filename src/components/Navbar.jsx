import React from 'react';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';


import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import TranslateIcon from '@mui/icons-material/Translate';
import CreateIcon from '@mui/icons-material/Create';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';


const Navbar = () => {
  return (
    <Stack
    direction = 'row'
    alignItems='center'
    p = {2}
    sx ={{position: 'sticky', background: '#dae0e6',top: 0, justifyContent: 'space-evenly'}}

  
    >
      <Link to = '/' >
        <div className='navContainer'>
          <span class = 'websiteName'> ESPAÑOL MAESTRO</span> <span><SchoolIcon /></span>
        </div>
      </Link>

      <Link to = '/translator'>
      <div className='navContainer'>
          <span > Translate</span> <span><TranslateIcon /></span>
        </div>
      </Link>

      
      <Link to = '/conjugation' >
        <div className='navContainer'>
            <span > Conjugation</span> <span><CreateIcon /></span>
        </div>
         
      </Link>

      
      <Link to = '/vocabulary'>
        <div className='navContainer'>
          <span > Vocabulary</span> <span><RecordVoiceOverIcon /></span>
        </div>    
      </Link>

      
      <Link>
        <div className='navContainer'>
          <span > Story</span> <span><AutoStoriesIcon /></span>
        </div>       
      </Link>

      

    </Stack>
  )
}

export default Navbar


{/* <Stack
direction='row'
alignItems= 'center'
p = {2}
sx ={{position: 'sticky', background: 'white',top: 0, justifyContent: 'space-between'}}
>
   <Link to ='/' style = {{display: 'flex', alignItems: 'center'}}>
     <img src = {Logo} alt = 'logo' height = {40} /> 
   </Link>

   <SearchBar />
</Stack> */}