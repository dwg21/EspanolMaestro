import {Navbar2, Conjugation, Translator, Home, Story, VocabularyForm, Past, Subjunctive, Future} from './components/index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

function App() {
  return (
    <BrowserRouter>
      <Box sx = {{backgroundColor: 'white', height: '100vh'}} height = '100%' >
        <Navbar2/>
          <Routes>
            <Route exact path = '/'  element = {<Home />} />
            <Route exact path = '/conjugation'  element = {<Conjugation />} />
            <Route exact path = '/story'  element = {<Story />} />
            <Route exact path = '/translator'  element = {<Translator />} />
            <Route exact path = '/vocabulary' element  = {<VocabularyForm />} />
            <Route exact path = '/past' element  = {<Past />} />
            <Route exact path = '/future' element  = {<Future />} />
            <Route exact path = '/subjunctive' element  = {<Subjunctive />} />



          </Routes>
      </Box>
      
    
    </BrowserRouter>
  );
}

export default App;


//backgroundColor: '#dae0e6'


