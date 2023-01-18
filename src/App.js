import React from 'react';
import HomePage from './routes/home/home.component';
import { Route, Routes } from 'react-router-dom';
import Navgation from './routes/navgation/navgation.component';
import Authentication from './routes/auth/authentcation.component';

import './App.css';

const Shop = () => {
  return (<div>shop</div>)
}

const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navgation />}>
          <Route index element={<HomePage />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/auth' element={<Authentication />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
