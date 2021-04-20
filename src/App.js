import React from 'react'

import {Navbar } from 'react-bootstrap'
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Main from './Components/Main';

const App = () => {
  return (
    <BrowserRouter>

      <Route  exact path = ''>
        <Main/>
      </Route>
      
    </BrowserRouter>
  );
}

export default App;