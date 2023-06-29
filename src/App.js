import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import HomePage from './routes/home/home.component';
import Authentication from './routes/auth/authentcation.component';
import Navgation from './routes/navgation/navgation.component';
import Shop from './routes/shop/shop.component';

import { GlobalStyles } from './global.styles';

import CheckOut from './routes/check-out/check-out.component';
import { createUserDocumentFromAuth, onAuthStateChangedListener } from './utils/firebase/firebase.utils';
import { setCurrentUser } from './store/user/user.action';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    })

    return unsubscribe;
    // eslint-disable-next-line
  }, [])


  return (
    <div className="App">
      <GlobalStyles />
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
