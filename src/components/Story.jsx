import React from 'react';
import { Box, Stack } from '@mui/system';
import { URL } from 'url';
import { useState, useEffect } from 'react';
import { GetTranslation } from '../util/DeepLApi';
import './story.css'
import { Divider } from '@mui/material';

const story1 = `Mi nombre es Valor. Soy un comerciante de tierras muy lejanas. Siempre comercio con diferentes productos en diferentes ciudades. Normalmente, viajo mucho. Viajo de ciudad en ciudad y de reino en reino. Mi trabajo es comerciar con diferentes cosas para ayudar a la gente. Yo cobro monedas de oro y a cambio, vendo productos útiles para las ciudades. 
Esta historia comienza en el camino de la primera ciudad. La primera ciudad que visito este año se llama Roca Gris. ¿Cómo es Roca Gris? Bueno, pues es una ciudad de tamaño pequeño. Se llama Roca Gris porque la ciudad tiene una colina muy grande al lado del mar donde hay muchas rocas grises.
El camino de Roca Gris es muy famoso porque conecta la ruta del comerciante. ¿Qué es la ruta del comerciante? Como su nombre indica, es una ruta que conecta varias ciudades para los comerciantes como yo. Un rey de hace mucho tiempo construyó las carreteras para ayudar a las ciudades a comerciar.
Estoy andando por el camino de Roca Gris y veo la ciudad a lo lejos. Veo la gran colina de rocas que da nombre a la ciudad. En el camino hay un viajero con un caballo y un cofre. Me acerco a preguntar quién es. Me gusta hablar con la gente. La mitad de mi `

// const words = ['andando', 'primera', 'comerciante','rocas' ]



const Story = () => {
  const [words, setWords] = useState(['andando', 'primera', 'comerciante','rocas' ])
    
  // const [translationInput, setTranslationInput] = useState('Mi nombre es Valor. Soy un comerciante de tierras muy lejanas. Siempre comercio con diferentes productos en diferentes ciudades. Normalmente, viajo mucho.');
  const [translationOutput, setTranslationOutput] = useState('');
  const [wordHighlighted, setWordHighlighted] = useState('second');
  const inputLanaguage = 'ES';
  const outputLanaguage = 'EN'


  
  const handleTranslate = async (translationInput) => {
    if (translationInput.split(' ').length >  1) {
        setTranslationOutput(await GetTranslation(translationInput, inputLanaguage, outputLanaguage )) 
    } else {
      setWordHighlighted(`${translationInput} : ${await GetTranslation(translationInput, inputLanaguage, outputLanaguage )}`) 

    }
  }

  // const [highlightedText, setHighlightedText] = useState(
  //   'Highlight a word or phrase and the translation will appear here'
  // );




  useEffect(() => {
    const saveSelection = () => {
      const highlightedText = (window.getSelection().toString());
        handleTranslate(highlightedText)  
    };
    document.addEventListener('mouseup', saveSelection);
    return () => document.removeEventListener('mouseup', saveSelection);
  }, []);

  //Function to add transalted word to list of words
  const addList = () => {
    setWords([...words , wordHighlighted ])

  }


  



  return (

    <Box p = {3}>
      <h2 className='heading' align = 'center'>Story</h2>
      <p>
        Hello, story is designed to help you learn grammar and reinfroce
        your understanding of grammar topics.
      </p>

      <Stack direction = "row" spacing = {4} divider={<Divider orientation="vertical" flexItem />}>
        <Box flex = {1}>
          <p className='story'>
            {story1}
          </p>
        </Box>

        <Stack flex={1}>
          <Box>
            <h4>Translation Here</h4>
            <p>{translationOutput}</p>
            <p></p>
             

          </Box>

          <Box>

            
            
            <h4>List of words here</h4>
            <p>Last word: {wordHighlighted}</p>
            <button onClick = {addList} className='button'>Add to list</button>
            <ul>
            {words.map((word) => {
              return (<li>{word}</li>)
            })} 
            </ul>
          </Box>
        </Stack>
      </Stack>

    </Box>
  )
}

export default Story


// will have a story in spanish where the user can hightlight a word for that words meaning and conjugatiosn or pharse to be translated