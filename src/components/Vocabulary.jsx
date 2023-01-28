import React from 'react';
import { VocabularyDrill, VocabularyForm, Footer} from '.';
import { useState } from 'react';


const Vocabulary = () => {
  const [vocabularyDrillActive, SetVocabularyDrillActive] = useState(false)

  return (  
    <div>
      { vocabularyDrillActive ?
        <VocabularyDrill
         vocabularyDrillActive = {vocabularyDrillActive}
         SetVocabularyDrillActive = {SetVocabularyDrillActive} /> : 
        <VocabularyForm />
      }
    </div>
  )
}

export default Vocabulary