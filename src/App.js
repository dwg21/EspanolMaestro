import {Navbar, Conjugation, Translator, Vocabulary, Home} from './components/index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

function App() {
  return (
    <BrowserRouter>
      <Box sx = {{backgroundColor: 'white', height: '100vh'}} height = '100%' >
        <Navbar/>
          <Routes>
            <Route exact path = '/'  element = {<Home />} />
            <Route exact path = '/conjugation'  element = {<Conjugation />} />
            
            <Route exact path = '/translator'  element = {<Translator />} />
            <Route exact path = '/vocabulary' element  = {<Vocabulary />} />
          </Routes>
      </Box>
      
    
    </BrowserRouter>
  );
}

export default App;


//backgroundColor: '#dae0e6'


