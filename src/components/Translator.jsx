import { Typography, Box, Card, Stack, TextField, Divider } from "@mui/material";
import { useState } from "react";
import { GetTranslation } from '../util/DeepLApi'

import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import { Footer } from ".";


const Translator = () => {
  
  const [translationInput, setTranslationInput] = useState('');
  const [translationOutput, setTranslationOutput] = useState('');
  const [inputLanaguage, setInputLanaguage] = useState('EN');
  const [outputLanaguage, setOutputLanaguage] = useState('ES');


  
  const handleTranslate = async () => {
    setTranslationOutput(await GetTranslation(translationInput, inputLanaguage, outputLanaguage )) 
  }

  const handleClickswitch = () => {
    if (inputLanaguage === 'EN') {
      setInputLanaguage('ES')
      setOutputLanaguage('EN')
    } else {
      setInputLanaguage('EN')
      setOutputLanaguage('ES')
    }
  }



  return (
    <Box p = {2} >

      <Box p = {2} sx = {{background: 'white'}} alignItems = 'center' justifyItems='center' display='flex' flexDirection='column' height= '50vh'>
        <Typography variant = 'h5' sx = {{marginBottom: '1rem'}}>
          Translator
        </Typography>

        

        <Stack direction='row'   justifyContent="space-between" width='60%' marginBottom= '1rem'>
          {inputLanaguage === 'EN' ? <span>English</span> : <span>Spanish</span>}
          <SwapHorizIcon onClick = {handleClickswitch} />
          {inputLanaguage === 'EN' ? <span>Spanish</span> : <span>English</span>}

        </Stack>


        <Stack  p = {2} direction = 'row' justifyContent='space-between' sx = {{ width: "90%"}}   divider={<Divider orientation="vertical" flexItem />}
>
  
            <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1 },
            flex: '1',
            padding: '1rem'
        
            
    
          }}
          
          noValidate
          autoComplete="off"
        >
          <TextField
            value = {translationInput}
            id="outlined-multiline-flexible"
            id="fullWidth"
            label="Enter English here"
            multiline
            fullWidth
            onInput = {e => setTranslationInput(e.target.value) }
            
          
          />
          </Box>

          {/* <Box sx = {{borderRight: 'solid black 2px'}}>
          </Box> */}

      
          <Box p = {1} sx = {{flex: '1', alignContent: 'center', alignContent: 'center', justifyContent:'center'}} justifyContent = 'center' alightContent = 'center'>
             {translationOutput}
            <Typography sx  >
            </Typography>
          </Box>

        </Stack>
        <button className = 'button' onClick = {handleTranslate} >Translate</button>

        </Box>
        <Footer />
      </Box>
  )
}

export default Translator