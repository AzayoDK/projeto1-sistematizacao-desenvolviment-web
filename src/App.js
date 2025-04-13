import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Appbar from './components/appbar';
import Hero from './components/hero';
import Services from './components/service';
import Pricing from './components/precing';
import Team from './components/team';
import FormsContact from './components/forms'
import Footer from './components/footer';
import ScrollToTopButton from './components/home';


function App() {
  return (
    <>
      <CssBaseline />
      <Appbar />
      <div id='home'>
      <Hero />
      </div>
      <div>
      <div id='services'>
        <Services />
      </div>
      <div id='team'>
        <Team />
      </div>
      <div id='pricing'>
        <Pricing />
      </div>
      <div id='forms'>
        <FormsContact />
      </div>
        <Footer />
      </div>
      <ScrollToTopButton />
    </>
  );
}

export default App;

// https://paletadecores.com/paleta/1b325f/9cc4e4/e9f2f9/3a89c9/f26c4f/