import { useContext, useEffect, useReducer } from 'react';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';

import AppReducer from './reducers/AppReducer';
import { Context, ContextWrapper } from './context/AppContext';

import Index from './pages/Index';
import Product from './pages/Product';
import Cart from './pages/Cart';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'

const App = () => {

  const ctx = useContext(Context);
  const reducer = useReducer(AppReducer, ctx);

  return (
    <ContextWrapper value={ reducer }>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/products/:id' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </ContextWrapper>
  )

}

export default App;