import { useState } from "react";

import { Typography, Box, Card } from "@mui/material";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';



import { ConjugationDrill, Footer } from "..";


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
  const [verbs, SetVerbs] = useState(1);
  const [tense, setTense] = useState(1);


  const handleChangeQuantity = (event) => {
    SetQuestionQuantity(event.target.value);
  };

  const handleChangeVerbs = (event) => {
    SetVerbs(event.target.value);
  };

  const handleChangeTense = (event) => {
    setTense(event.target.value);
  };



  // const handleChange2 = (event) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   setTenses(
  //     // On autofill we get a stringified value.
  //     typeof value === 'string' ? value.split(',') : value,
  //   );
  // };

  const handleButtonClick = () => {
    setConjugationFormActive(true)
  }
   
  
  return (


    <Box  p = {2}  >
        {conjugationFormActive == false ?

        <Box  display= 'flex' flexDirection= 'column' justifyContent = 'center' alignItems='center' >

      <Card align = 'center' sx = {{padding: '1.5rem', display: "flex", justifyContent: 'center' , alignItems: 'center', flexDirection: 'column' , maxWidth: '800px'}}>
     <Typography variant = 'h5' sx = {{paddingBottom: '1.5rem'}}>Welcome to the Conjuagtion Excercise</Typography>
     <Typography sx = {{paddingBottom: '1.5rem'}} alignItems = 'initial'>This is an excercise designed to help you practise the conjuagtions of verbs in different tenses and Situations. Please select your preferences.</Typography>


      <FormControl fullWidth sx = {{marginBottom: '2rem'}}>
      <InputLabel id="demo-simple-select-label">How Many Questions ? </InputLabel>
      <Select
        labelId="questionQuantity"
        id="questionQuantity"
        value={questionQuantity}
        label="How Many Questions ?"
        onChange={handleChangeQuantity}
      >
        <MenuItem value={3}>three</MenuItem>
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
        <MenuItem value={1}>Most Common</MenuItem>
        <MenuItem value={2}>Irrelguar</MenuItem>
      </Select>
    </FormControl>

    <FormControl fullWidth sx = {{marginBottom: '2rem'}}>
      <InputLabel >Which Tense ? </InputLabel>
      <Select
        labelId="Tenses"
        value={tense}
        label="Which verbs ? "
        onChange={handleChangeTense}
      >
        <MenuItem value={1}>All</MenuItem>
        <MenuItem value={2}>Present</MenuItem>
        <MenuItem value={3}>Imperfect</MenuItem>
        <MenuItem value={4}>Indefinedo</MenuItem>
      </Select>
    </FormControl>





        <button class = 'button' onClick={handleButtonClick} >
          Start Drill
        </button>
        </Card>
        <Footer />
        </Box>

      : 
      
      <ConjugationDrill
      questionQuantity = {questionQuantity}
      tense = {tense}
      verbs = {verbs}
      setConjugationFormActive = {setConjugationFormActive}
      
      />
      }

  
    

    


    
  </Box>

  )
}

export default ConjugationForm