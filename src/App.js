import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from './routes/home/home.component';
import Authentication from './routes/auth/authentcation.component';
import Navgation from './routes/navgation/navgation.component';
import Shop from './routes/shop/shop.component';

import './App.css';
import CheckOut from './routes/check-out/check-out.component';

const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navgation />}>
          <Route index element={<HomePage />} />
          <Route path='/shop/*' element={<Shop />} />
          <Route path='/auth' element={<Authentication />} />
          <Route path='/checkout' element={<CheckOut />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
