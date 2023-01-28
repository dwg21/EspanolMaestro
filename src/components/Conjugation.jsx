import { useState } from "react";

import { Typography, Box, Card } from "@mui/material";


import { ConjugationForm, Footer } from './index'


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



const Conjugation = () => {

  const [conjugationFormActive, setConjugationFormActive] = useState(false)
  // const [verbs, SetVerbs] = useState('most common');
  // const [tenses, setTenses] = useState([]);
  // const [questionQuantity, SetQuestionQuantity] = useState(10);




  return (
    <Box p = {2}>
            {conjugationFormActive == false ? 
            <h2 className="heading" align = 'center'>Conjugation Excercise</h2>: <></>}
            <ConjugationForm 
            conjugationFormActive = {conjugationFormActive}
            setConjugationFormActive = {setConjugationFormActive} />
      <Footer/>

    </Box>



  )
}

export default Conjugation