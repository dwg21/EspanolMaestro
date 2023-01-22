import React, { useState } from 'react';
import * as deepl from 'deepl-node';
import axios from 'axios'
const authKey = '34ce88e3-d862-f97c-5e17-9e503e8541ed:fx';

const contentInput = 'Hello, how are you? '


// export const GetTranslation = (e) => {
//     const [contentOutput, setContentOutput] = useState("")

//     // e.preventDefault()

//     const deeplUrl = `https://api-free.deepl.com/v2/translate?auth_key=${authKey}&text=${contentInput}&source_lang=EN&target_lang=ES`

//     axios.get(deeplUrl)
//         .then(response => setContentOutput(response.data.translations[0].text))
//         .catch(error => console.log("error :", error.response))

//     return contentOutput
// }

// export const GetTranslation = (e) => {
//     const [contentOutput, setContentOutput] = useState("")

//     // e.preventDefault()

//     const deeplUrl = `https://api-free.deepl.com/v2/translate?auth_key=${authKey}&text=${contentInput}&source_lang=EN&target_lang=ES`

//     axios.get(deeplUrl)
//         .then(response => setContentOutput(response.data.translations[0].text))
//         .catch(error => console.log("error :", error.response))

//     return contentOutput
// }


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


// export const fetchFromAPI = async (subreddit) => {
//     const data = await axios.get(subreddit)
//     return data
// }







// export const TranslateDeepL = async () => {
//     const params = {
//         'auth_key': authKey,
//         'source_lang': 'EN',
//         'target_lang': 'ES',
//         'text': 'Hello, how are you ? '
//     }

//     try {
//         const r = await fetch('https://api.deepl.com/v2/translate', {
//             method: 'POST',
//             body: params,
//             headers: {
//                 'Content-Type': 'application/x-www-form-urlencoded',
//             },
//         });
//         return await r.json();
//     } catch (error) {
//         console.error(error);
//         return 'Could not translate';
//     }
// }









// axios.post('/user', {
//     firstName: 'Fred',
//     lastName: 'Flintstone'
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });


// import axios from 'axios';

// export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

// const options = {
//   params: {
//     maxResults: 50,
//   },
//   headers: {
//     'X-RapidAPI-Key': '4f4870fe17msh96fc84f8a855730p111b01jsn613f4286cbaf',
//     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
//   },
// };

// export const fetchFromAPI = async (url) => {
//   const { data } = await axios.get(`${BASE_URL}/${url}`, options);

//   return data;
// };



