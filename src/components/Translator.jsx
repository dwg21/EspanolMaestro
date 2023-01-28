import { Typography, Box, Card, Stack, TextField, Divider } from "@mui/material";
import { useState } from "react";
import { GetTranslation } from '../util/DeepLApi'

import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import { Footer } from ".";
import { minWidth } from "@mui/system";


const Translator = () => {
  
  const [translationInput, setTranslationInput] = useState('');
  const [translationOutput, setTranslationOutput] = useState('');
  const [inputLanaguage, setInputLanaguage] = useState('EN');
  const [outputLanaguage, setOutputLanaguage] = useState('ES');


  
  const handleTranslate = async () => {
    setTranslationOutput(await GetTranslation(translationInput, inputLanaguage, outputLanaguage )) 
    console.log(translationOutput)
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
          <h2 className="heading">Translator</h2>
        </Typography>

        

        <Stack direction='row'   justifyContent="space-between" width='60%' marginBottom= '1rem'>
          {inputLanaguage === 'EN' ? <span className="subheading">English</span> : <span className="subheading">Spanish</span>}
          <div className="swapIcon"><SwapHorizIcon style = {{fontSize: '42px'}}onClick = {handleClickswitch} /></div>
          {inputLanaguage === 'EN' ? <span className="subheading">Spanish</span> : <span className="subheading">English</span>}

        </Stack>


        <Stack  p = {2} direction = 'column' justifyContent='space-between' sx = {{flexDirection: {sm: 'row'}}}   divider={<Divider orientation="vertical" flexItem />}
>
  
            <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1 },
            flex: '1',
            padding: '1rem',
            minWidth: {xl: '700px', lg: '600px', md: '450px', sm: '350px', xs: '375px' }
        
            
    
          }}
          
          noValidate
          autoComplete="off"
        >
          <TextField
            value = {translationInput}
            id="outlined-multiline-flexible"
            id="fullWidth"
            label= {inputLanaguage === 'EN' ? `Enter English here`: 'Enter Spanish Here'}
            multiline
            rows = {10}
            fullWidth
            
            onInput = {e => setTranslationInput(e.target.value) }
            
          
          />
          </Box>

          {/* <Box sx = {{borderRight: 'solid black 2px'}}>
          </Box> */}

          <Box p = {2} sx = {{flex: '1', minWidth: {xl: '700px', lg: '600px', md: '450px', sm: '350px', xs: '375px'}}}>
            <Box p = {2} sx = {{flex: '1', alignContent: 'center', alignContent: 'center', justifyContent:'center', border: 'gray 2px solid', width: '100%', minHeight: '264px'}}  justifyContent = 'center' alightContent = 'center'>
              {translationOutput}
              <Typography sx  >
              </Typography>
            </Box>
          </Box>
          

        </Stack>
        <button className = 'button' onClick = {handleTranslate} >Translate</button>
        <Footer />
        </Box>
        
      </Box>
  )
}

export default Translator