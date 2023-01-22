import {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import './vocabularyDrill.css'
import { motion, useMotionValue, useTransform, useAnimation } from "framer";
import { Box, Typography, Stack } from "@mui/material";

import { fight, watch, speak, have } from "../resources";



//  const verbs = {
//    'fight': 0,
//    'speak': 0,
//    'be able to': 1,
//    'to have': 0,
//  }

 let verbs = {
  'fight': [0, 'To Fight', fight, 'luchar', 'fight'],
  'speak': [0, 'To Speak', speak, 'hablar', 'speak'],
  'mirar': [0, 'To Watch', watch, 'mirar', 'mirar'],
  'have': [0, 'To Have',have, 'tener', 'have']
}

 // The drill will run until the user has got each word right 2 times. 




const VocabularyDrill = () => {

  const  [drillActive, setDrillActive] = useState(true);

  const [revealAnswer, setRevealAnswer] = useState(false);

  const [answer, setAnswer] = useState('');

  const [verb, setVerb] = useState(verbs['fight']);

  // Selects a verb from the list but only returns if it has an index less than 2 
  // and is diffeent to the last verb. 
  const SelectVerb = () => {
    while (true) {
      const index =  Math.floor(Math.random() * (4));
      const selectedVerb = Object.values(verbs)[index];
      if (selectedVerb[0] < 2 && selectedVerb !== verb ) {
        return selectedVerb
        break
      
      }
    }

  }


  //check if the game should still be active or if the user
  // has answerd eveyrthing sifficently.
  // Returns true if everythig answered correcty twice or false otherwise

  const checkFinished = () => {
    let total = 0 ;
    const size = Object.keys(verbs).length*2;
    Object.values(verbs).map((array) => {
     total += array[0]
    })
    if (total == size ) {
      return true
    } else {
      return false
      
    }
    

  }




  //handles answer
  const handleSubmit = () => {
     
    if (answer == verb[3]) {
      verbs[[verb[4]]][0] += 1;
      const checkGame = checkFinished()

      if (checkGame == true) {
        setDrillActive(false)
      } else {
        setVerb(SelectVerb)
        setAnswer('')
      }

      


    } else {
      setRevealAnswer(true)
      setTimeout(() => {
        setVerb(SelectVerb)
        setRevealAnswer(false)
      }, 3000);
      
    }


  
  }




  return (
    <Box p = {4} display = 'flex' justifyContent= 'center'>
       
        <Box p = {4} sx = {{background: 'white'}} width = "50%">
          
            {drillActive == true ? 
            <Stack direction= 'column' alignItems= 'center' spacing={2}>
                <span className = 'verb'>{`${verb[1]}`} </span>
                <Stack spacing={3}>
                    <img className = 'gif' src = {verb[2]} />
                
                </Stack>
                <input value = {answer} onInput = {e => setAnswer(e.target.value) }  />
                <button className="button" onClick={handleSubmit}>Submit</button>
                {revealAnswer == true ?
                <span>The correct answer is {verb[3]}</span> : <></>}

            </Stack> : 

            <span>Game over</span>
}



            
        </Box >
    </Box>
  )
}

export default VocabularyDrill