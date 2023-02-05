import {useState, useEffect} from 'react';
import { Typography, Box, Card, Stack} from "@mui/material";
import { ProgressBar, Table } from '..';
import './conjugationDrill.css';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import { display } from '@mui/system';


const irregularVerbs = {
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

const commonVerbs = {
    'vivir': {
       'present': ['vivo', 'vives', 'vive', 'vivimos', 'viven'],
       'imperfect': ['vivia', 'vivias', 'vivia', 'viviamos', 'vivian'],
       'indefindo': ['vivi', 'viviste', 'vivio', 'vivimos', 'vivieron']
    },
    'hablar': {
        'present': ['hablo', 'hablas', 'habla', 'hablamos', 'hablen'],
        'imperfect': ['hablaba', 'hablabas', 'hablaba', 'hablabamos', 'hablaban'],
        'indefindo': ['hable', 'hablaste', 'hablo', 'hablamos', 'hablaron']
     },

     'escribir': {
        'present': ['escribo', 'escribes', 'escribe', 'escribimos', 'escriben'],
        'imperfect': ['escribia', 'escribias', 'escribia', 'escribiamos', 'escribian'],
        'indefindo': ['escribi', 'escribiste', 'escribio', 'escribimos', 'escribieron']
     }

} 



//Idea for irregualr verbs say which group they belong to and why

const pronouns = ['yo', 'tu', 'el/ella/usted', 'nosotros', 'ellos/ustedes']

const ConjugationDrill = ({questionQuantity, verbs, tense, setConjugationFormActive}) => {
    // will be changed to props data
    const [verbIndex, setVerbIndex] = useState(0);
    const [pronounIndex, setPronounIndex] = useState(0);
    const tensesTest = ['present','imperfect', 'indefindo'];
    const [tenseIndex, setTenseIndex] = useState(1);
    const [answer, setAnswer] = useState('');

    const [questionCounter, setQuestionCounter] = useState(0);
    const [answerResults, SetanswerResults] = useState(null);
    var correctAnswers = 0 ;

    const [showFeedback, setShowFeedback] = useState(false)

    //this function will randomarise the variables to change the question
    const setQuestion = () => {
        if (tense == 1) {
        setTenseIndex(Math.floor(Math.random() * (3)))

        } else if (tense == 2) {
            setTenseIndex(0)

        } else if (tense == 3 ) {
            setTenseIndex(1)
        } else if (tense == 4 ) {
            setTenseIndex(2)
        }
        setVerbIndex(Math.floor(Math.random() * (3)))
        setPronounIndex(Math.floor(Math.random() * (5)))
        
    }

    // fucntion to reset the game at the end
    const handleclick = () => {
        setTimeout(() => {
            setConjugationFormActive(false)
        }, 1000);
    }


    // will set the verbs to be used as what the user selected previsoulsy 
    let activeVerbs = {};
    if (verbs === 1 ) {
        activeVerbs = {...commonVerbs}
    } else {
        activeVerbs = {...irregularVerbs}
    }


    const [incorrectAnswers, setIncorrectAnswers] = useState([])
    // let incorrectAnswers = [];
    /// On submit this function will check if the user's answer is correct and triger the setquestion function
    const submitAnswer = () => {
        const differentTenses = Object.values(activeVerbs)[verbIndex] 
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
             setIncorrectAnswers([...incorrectAnswers, Object.keys(activeVerbs)[verbIndex]])
            console.log(incorrectAnswers)
            SetanswerResults(expectedAnswer)
            setTimeout(() => {
                SetanswerResults(null)
                setQuestionCounter(questionCounter + 1)
                setQuestion()
                setAnswer('')
                
                
                
              }, 2000);
              

            


        }

        
    }

    useEffect(() => {
        setQuestion();
      }, []);




        
    
    function removeDuplicates(arr) {
        return arr.filter((item,index) => arr.indexOf(item) === index);
    }
   
    



    
    return (

    <Box >
        
        {questionCounter != questionQuantity ? 
            <Card sx = {{padding: '2rem'}}>
            <ProgressBar value = {(questionCounter/questionQuantity) *100 } />
            
            <Stack spacing = {2}   alignItems="center">
            <Typography padding = {2} variant = 'h5'>
                Conjugate the verb <span class = 'highlight'>{Object.keys(activeVerbs)[verbIndex]}</span> for <span class = 'highlight'>{pronouns[pronounIndex]}</span> in the tense: <span class = 'highlight'>{tensesTest[tenseIndex]}</span>
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
        <Box>
        <Card sx = {{padding: '2rem' }}>
            <Typography  align = 'center' variant = 'h5'>You've finished ! You scored {questionCounter - incorrectAnswers.length} / {questionQuantity}</Typography>
            <div className='center'><button onClick = {handleclick} class = 'button' >Try Again</button></div>
        </Card>           
        
        <Box p = {3} display='flex' flexDirection='column'>
        <span align = 'center' className='subheading'>Revise the verbs you got incorrrect</span>
        <div className='icon'><ImportExportIcon style = {{fontSize: '32px'}} onClick={()=> setShowFeedback(!showFeedback)} /></div>
        </Box>
         { showFeedback ? <Stack  className = 'feedback'>    
            {removeDuplicates(incorrectAnswers).map(item => <Table verb = {item} verbData = {activeVerbs[item]} />)} 
            </Stack > : <></>}
        </Box> }




    </Box>
  )
}

export default ConjugationDrill