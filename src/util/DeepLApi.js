import React, { useState } from 'react';
import * as deepl from 'deepl-node';
import axios from 'axios'
const authKey = '34ce88e3-d862-f97c-5e17-9e503e8541ed:fx';

// Fucntion to return translation between english and spanish 

export const GetTranslation =  async (input, sourceLang, targetLang) => {

    try {
    const deeplUrl = `https://api-free.deepl.com/v2/translate?auth_key=${authKey}&text=${input}&source_lang=${sourceLang}&target_lang=${targetLang}`
    const response = await axios.get(deeplUrl)
    const data = response.data.translations[0].text
    return data
     } catch(error) {
            console.error(error);
            return 'Could not translate';

    }

}


