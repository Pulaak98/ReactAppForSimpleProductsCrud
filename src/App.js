import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Register } from './Components/Register';
import { LogIn } from './Components/LogIn';
import FetchData from './Components/FetchData';
import  ProductCrud  from './Components/ProductCrud';

import './App.css';

function App() {

  return (
    <div class="App">
      <BrowserRouter>
        <Routes>
          <Route path='/register' Component={Register} />
          <Route path='/login' Component={LogIn} />
          <Route path='/products' Component={FetchData} />
          <Route path='/productcrud' Component={ProductCrud} />
          <Route path='/' Component={LogIn}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
