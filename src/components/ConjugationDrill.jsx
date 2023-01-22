import {useState, useEffect} from 'react';
import { Typography, Box, Card, Stack} from "@mui/material";
import { ContentPasteSearchOutlined, CoPresentOutlined } from '@mui/icons-material';


const VerbtestData = {
    'tener': {
       'present': ['tengo', 'tienes', 'tiene', 'tenemos', 'tienen'],
       'imperfect': ['tenia', 'tenias', 'tenia', 'teniamos', 'tenian'],
       'indefindo': ['tuve', 'tuviste', 'tuvo', 'tuvimos', 'tuvieron']
    },
    'ser': {
        'present': ['soy', 'eres', 'es', 'somos', 'son'],
        'imperfect': ['era', 'eras', 'era', 'eramos', 'eran'],
        'indefindo': ['fui', 'fuiste', 'fue', 'fuimos', 'fueron']
     },

     'estar': {
        'present': ['estoy', 'estas', 'esta', 'estamos', 'estan'],
        'imperfect': ['estaba', 'estabas', 'estaba', 'estabamos', 'estaban'],
        'indefindo': ['estuve', 'estuviste', 'estuvo', 'estuvimos', 'estuvieron']
     }






}

//Idea for irregualr verbs say which group they belong to and why

const pronouns = ['yo', 'tu', 'el/ella/usted', 'nosotros', 'ellos/ustedes']

const ConjugationDrill = ({questionQuantity, verbs, tenses, setConjugationFormActive}) => {
    // will be changed to props data
    const [verbIndex, setVerbIndex] = useState(0);
    const [pronounIndex, setPronounIndex] = useState(0);
    const tensesTest = ['present','imperfect', 'indefindo'];
    const [tenseIndex, setTenseIndex] = useState(1);

    const [answer, setAnswer] = useState('');

    const [questionCounter, setQuestionCounter] = useState(0);
    const [answerResults, SetanswerResults] = useState(null);
    var correctAnswers = 0 ;

    //this function will randomarise the variables to change the question
    const setQuestion = () => {


        setVerbIndex(Math.floor(Math.random() * (3)))
        setPronounIndex(Math.floor(Math.random() * (5)))
        setTenseIndex(Math.floor(Math.random() * (3)))
        
    }

    // fucntion to reset the game at the end
    const handleclick = () => {
        setTimeout(() => {
            setConjugationFormActive(false)
        }, 1000);
    }




    /// On submit this function will check if the user's answer is correct and triger the setquestion function
    const submitAnswer = () => {
        const differentTenses = Object.values(VerbtestData)[verbIndex] 
        console.log(differentTenses)
        const expectedAnswer = Object.values(differentTenses)[tenseIndex][pronounIndex]
        if (answer == expectedAnswer) {
            SetanswerResults(true)
            setTimeout(() => {
                setQuestionCounter(questionCounter + 1)
                correctAnswers = correctAnswers + 1 
                setQuestion()
                setAnswer('')
                SetanswerResults(null)
            }, 2000);


            



        } else {
            SetanswerResults(expectedAnswer)
            setTimeout(() => {
                SetanswerResults(null)
                setQuestionCounter(questionCounter + 1)
                setQuestion()
                setAnswer('')
                
              }, 3000);

            


        }

        
    }

    
  
    return (

    <Box >
        
        {questionCounter != 10 ? 
            <Card sx = {{padding: '2rem'}}>
            <span style={{float: 'right'}}>Question {questionCounter} / 10</span>
            
            <Stack spacing = {2}   alignItems="center">
            <Typography padding = {2} variant = 'h5'>
                Conjugate the verb <span class = 'highlight'>{Object.keys(VerbtestData)[verbIndex]}</span> for <span class = 'highlight'>{pronouns[pronounIndex]}</span> in the tense: <span class = 'highlight'>{tensesTest[tenseIndex]}</span>
            </Typography>

            <input value = {answer} onInput = {e => setAnswer(e.target.value) }  >
            </input>

            <button class = 'button' onClick={submitAnswer}>Submit</button>

            {answerResults == true ?
             <Typography sx = {{color: 'green'}}>Correct ! </Typography> : answerResults == null ? 
             <></> :
             <Typography sx = {{color: 'red'}}variant = 'h6'>Wrong ! The correct answer is : {answerResults}</Typography>
            }

            </Stack>


        </Card>: 
        <Card sx = {{padding: '2rem'}}>
            <Typography variant = 'h5'>You've finished ! You scored {correctAnswers} / 10</Typography>
            <button onClick = {handleclick} class = 'button' >Try Again</button>
        </Card>}

    </Box>
  )
}

export default ConjugationDrill