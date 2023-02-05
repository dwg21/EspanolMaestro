import {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import './vocabularyDrill.css'
import { motion, useMotionValue, useTransform, useAnimation } from "framer";
import { Box, Typography, Stack, Card } from "@mui/material";

import { fight, watch, speak, have, neck, arm, head, shoulder, dog, cat, lion, bird, smoke, read, write, learn, sleep, cook, knee, eye, finger, hand, ear, nose, horse, pig, tiger, elephant, whale, rat } from "../../resources";
import ProgressBar from "../ProgressBar";

import Footer from "../footer/Footer";



// index image, spanish, english 

 let verbsData = {
  'fight': [0, 'To Fight', fight, 'luchar', 'fight'],
  'speak': [0, 'To Speak', speak, 'hablar', 'speak'],
  'watch': [0, 'To Watch', watch, 'mirar', 'watch'],
  'have': [0, 'To Have',have, 'tener', 'have'],

  'smoke': [0, 'To Smoke',smoke, 'fumar', 'smoke'],
  'read': [0, 'To Read',read, 'leer', 'read'],
  'write': [0, 'To Write',write, 'escribir', 'write'],
  'learn': [0, 'To Learn ',learn, 'aprender', 'learn'],
  'sleep': [0, 'To Sleep',sleep, 'dormir', 'sleep'],
  'cook': [0, 'To Cook',cook, 'cocinar', 'cook'],

}

let bodyPartWords = {
  'Neck': [0, 'Neck', neck, 'cuello', 'Neck'],
  'Arm': [0, 'Arm', arm, 'brazo', 'Arm'],
  'Head': [0, 'Head', head, 'cabeza', 'Head'],
  'Shoulder': [0, 'Shoulder',shoulder, 'hombro', 'Shoulder'],

  'Knee' : [0, 'Knee', knee , 'rodilla', 'Knee'],
  'Eye' : [0, 'eye', eye , 'ojo', 'Eye'],
  'Finger' : [0, 'Finger', finger , 'dedo', 'Finger'],
  'Hand' : [0, 'hand', hand , 'mano', 'Hand'],
  'nose' : [0, 'nose', nose , 'nariz', 'nose'],
  'ear' : [0, 'ear', ear , 'oreja', 'ear'],


}

let animalWords = {
  'Dog': [0, 'Dog', dog, 'perro', 'Dog'],
  'Cat': [0, 'Cat', cat, 'gato', 'Cat'],
  'Lion': [0, 'Lion', lion, 'leon', 'Lion'],
  'Bird': [0, 'Bird',bird, 'pajaro', 'Bird'],

  'Whale': [0, 'Whale',whale, 'ballena', 'Whale'],
  'Tiger': [0, 'Tiger',tiger, 'tigre', 'Tiger'],
  'Elephant': [0, 'Elephant',elephant, 'elefante', 'Elephant'],
  'Pig': [0, 'Pig',pig, 'cerdo', 'Pig'],
  'Horse': [0, 'Horse',horse, 'caballo', 'Horse'],
  'Rat': [0, 'Rat',rat, 'raton', 'Rat'],









}







 // The drill will run until the user has got each word right 2 times. 


const testData = {
  'Dog': [0, 'Dog', dog, 'perro', 'Dog'],
  'Cat': [0, 'Cat', cat, 'gato', 'Cat'],
  'Lion': [0, 'Lion', lion, 'leon', 'Lion'],
  'Bird': [0, 'Bird',bird, 'pajaro', 'Bird']
}

const index = 1
let counter = 0 
let verbdata2 = {}
  for (const key in testData) {
    if (counter < index ) {
      verbdata2 = {...verbdata2, ...testData[key]}
      counter = counter + 1 
      console.log(counter)
      console.log(verbdata2)
    }
    
  
  }



const VocabularyDrill = ({questionQuantity, verbs, SetVocabularyDrillActive}) => {
  let verbData = {}
  if (verbs === '1' ) {
      verbData  = {...verbsData}
      console.log(verbData)
  } else if (verbs === '2') {
    verbData = {...animalWords}
    console.log(verbData)
  } else {
    verbData = {...bodyPartWords}

  }

  const  [drillActive, setDrillActive] = useState(true);

  const [revealAnswer, setRevealAnswer] = useState(false);

  const [correctAnswer, SetCorrectAnswer] = useState(false);

  const [answer, setAnswer] = useState('');

  const [verb, setVerb] = useState(Object.values(verbData)[0]);
    // Tracks progress of questions answered
   const [progress, SetProgress] = useState(0);

  const handleReset = () => {
    SetVocabularyDrillActive(false)
  }



  // Selects a verb from the list but only returns if it has an index less than 2 
  // and is diffeent to the last verb. 
  const SelectVerb = () => {
    while (true) {
      const index =  Math.floor(Math.random() * questionQuantity);
      const selectedVerb = Object.values(verbData)[index];
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
     const size = questionQuantity*2;
    // const size = 10;
    Object.values(verbData).map((array) => {
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
      SetProgress(progress + 1/(questionQuantity*2)*100)
      verbData[[verb[4]]][0] += 1;
      const checkGame = checkFinished()

      if (checkGame == true) {
        setDrillActive(false)
      } else {
        SetCorrectAnswer(true)
        setTimeout(() => {
          SetCorrectAnswer(false)
          setAnswer('')
          setVerb(SelectVerb)
        }, 1500);
      
      }

      

    } else {
      setRevealAnswer(true)
      setTimeout(() => {
        setVerb(SelectVerb)
        setRevealAnswer(false)
        setAnswer('')
      }, 3000);
      
    }


  
  }





  return (
    <Box p = {4} display = 'flex' justifyContent= 'center'>
       
        <Box p = {4} sx = {{background: 'white'}} width = "100%">
          
            {drillActive == true ? 

            <Stack direction= 'column' alignItems= 'center' spacing={2}>
              
                <span className = 'verb'>{`${verb[1]}`} </span>
                <Stack spacing={3}>
                <ProgressBar value = {progress} />
                    <img className = 'gif' src = {verb[2]} />
                
                </Stack>
                <input value = {answer} onInput = {e => setAnswer(e.target.value) }  />
                <button className="button" onClick={handleSubmit}>Submit</button>
                {revealAnswer == true ?
                <span className="incorrectAnswer">The correct answer is {verb[3]}</span> : correctAnswer == true ? 
                <span className="correctAnswer">Correct Answer ! </span>: <></>}

            </Stack> : 

            <Box p = {0}>
              <Stack display= 'flex' direction = 'column' justifyItems='center' spacing = {3}>
                <span  className="heading">You've Finished</span>
                <button onClick = {handleReset} className = 'button'>Go again</button>
                <Footer />
              </Stack>

              

          </Box>
}



            
        </Box >
    </Box>
  )
}

export default VocabularyDrill