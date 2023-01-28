import { useState } from "react";

import { Typography, Box, Card } from "@mui/material";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';



import { ConjugationDrill, Footer } from ".";


const names = [
    'Present',
    'Preterite',
    'Imperfect',
    'Gerund',
  ];
  
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  
  
  
const ConjugationForm = ({conjugationFormActive, setConjugationFormActive}) => {


  const [questionQuantity, SetQuestionQuantity] = useState(10);
  const [verbs, SetVerbs] = useState('most common');



  const handleChangeQuantity = (event) => {
    SetQuestionQuantity(event.target.value);
  };

  const handleChangeVerbs = (event) => {
    SetVerbs(event.target.value);
  };


  const [tenses, setTenses] = useState([]);

  const handleChange2 = (event) => {
    const {
      target: { value },
    } = event;
    setTenses(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleButtonClick = () => {
    setConjugationFormActive(true)
  }
   
  return (
    <Box>
    <Box  p = {2} display = 'flex' alignContent='center' justifyContent='center'>
        {conjugationFormActive == false ?

      <Card sx = {{padding: '1.5rem', display: "flex", justifyContent: 'center' , alignItems: 'center', flexDirection: 'column' , maxWidth: '800px'}}>
     <Typography variant = 'h5' sx = {{paddingBottom: '1.5rem'}}>Welcome to the Conjuagtion Excercise</Typography>
     <Typography sx = {{paddingBottom: '1.5rem'}} alignItems = 'initial'>This is an excercise designed to help you practise the conjuagtions of verbs in different tenses and siutaions. Please select your preferences.</Typography>


      <FormControl fullWidth sx = {{marginBottom: '2rem'}}>
      <InputLabel id="demo-simple-select-label">How Many Questions ? </InputLabel>
      <Select
        labelId="questionQuantity"
        id="questionQuantity"
        value={questionQuantity}
        label="How Many Questions ?"
        onChange={handleChangeQuantity}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>

    <FormControl fullWidth sx = {{marginBottom: '2rem'}}>
      <InputLabel >Which Verbs ? </InputLabel>
      <Select
        labelId="Verbs"
        id="verbSelction"
        value={verbs}
        label="Which verbs ? "
        onChange={handleChangeVerbs}
      >
        <MenuItem value={'Most Common'}>Most Common</MenuItem>
        <MenuItem value={'Irrelguar'}>Irrelguar</MenuItem>
        <MenuItem value={'filler'}>filler</MenuItem>
      </Select>
    </FormControl>


    <FormControl sx={{ width: 300, marginBottom: '2rem' }}>
      <InputLabel id="Select the tenses">Select the tenses</InputLabel>
      <Select
        labelId="Select the tenses"
        id="tenses"
        multiple
        fullWidth
        value={tenses}
        onChange={handleChange2}
        input={<OutlinedInput label="Select the tenses" />}
        renderValue={(selected) => selected.join(', ')}
        MenuProps={MenuProps}
      >
        {names.map((name) => (
          <MenuItem key={name} value={name}>
            <Checkbox checked={tenses.indexOf(name) > -1} />
            <ListItemText primary={name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>


        <button class = 'button' onClick={handleButtonClick} >
          Start Drill
        </button>

      </Card>: 
      
      <ConjugationDrill
      questionQuantity = {questionQuantity}
      tenses = {tenses}
      verbs = {verbs}
      setConjugationFormActive = {setConjugationFormActive}
      
      />
      }

  
    

    


    
  </Box>
  </Box>

  )
}

export default ConjugationForm