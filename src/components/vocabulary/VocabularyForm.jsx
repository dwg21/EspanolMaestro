import React from 'react';
import { Typography, Box, Card } from "@mui/material";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

import { useState } from 'react';

import Footer from '../footer/Footer';
import VocabularyDrill from './VocabularyDrill';

const VocabularyForm = () => {
  const [questionQuantity, SetQuestionQuantity] = useState(10);
  
  // 1 : Most common verbs, 2: animals, 3: body
  const [verbs, SetVerbs] = useState('1');
  const [vocabularyDrillActive, SetVocabularyDrillActive] = useState(false)




  const handleChangeQuantity = (event) => {
    SetQuestionQuantity(event.target.value);
  };

  const handleChangeWords = (event) => {
    SetVerbs(event.target.value);
  };

  const handleStartExcercise = () => {
    SetVocabularyDrillActive(true)
  }

  return (

    
    
    
    <Box p = {2} >
      { vocabularyDrillActive !==true ? <Box p = {2} display= 'flex' flexDirection= 'column' justifyContent = 'center' alignItems='center'> 
        <h2 className='heading' align = 'center'>Vocabulary Excercise</h2>
        <Card sx = {{padding: '1.5rem', display: "flex", justifyContent: 'center' , alignItems: 'center', flexDirection: 'column' , maxWidth: '800px'}}>
        <Typography variant = 'h5' sx = {{paddingBottom: '1.5rem'}}>Welcome to the Vocabulary Excercise</Typography>
        <Typography sx = {{paddingBottom: '1.5rem'}} alignItems = 'center'>This is an excercise designed to help you practise And remember vocabualry.
        Select your prefered options and begin ! Each word will cycle until you have got it right at least 2 times.</Typography>


        <FormControl fullWidth sx = {{marginBottom: '2rem'}}>
        <InputLabel id="demo-simple-select-label">How Many Different Words ? </InputLabel>
        <Select
          labelId="questionQuantity"
          id="questionQuantity"
          value={questionQuantity}
          label="How Many Different Words ?"
          onChange={handleChangeQuantity}
        >
          <MenuItem value={5}>Five</MenuItem>
          <MenuItem value={10}>Ten</MenuItem>

        </Select>
      </FormControl>

      <FormControl fullWidth sx = {{marginBottom: '2rem'}}>
        <InputLabel >Which Words ? </InputLabel>
        <Select
          labelId="Verbs"
          id="verbSelction"
          value={verbs}
          label="Which verbs ? "
          onChange={handleChangeWords}
        >
          <MenuItem value={'1'}>Most Common Verbs</MenuItem>
          <MenuItem value={'2'}>Animals</MenuItem>
          <MenuItem value={'3'}>Body Parts</MenuItem>
        </Select>
      </FormControl>



          <button class = 'button' onClick={handleStartExcercise} >
            Start Drill
          </button>

        </Card>
      <Footer />
      </Box> :
      <div>
        <VocabularyDrill
        questionQuantity = {questionQuantity}
        verbs = {verbs}SetVocabularyDrillActive = {SetVocabularyDrillActive} />
        

      </div> }
    </Box>
    
  )
}

export default VocabularyForm