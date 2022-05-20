import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';

import Index from './pages/Index';
import Product from './pages/Product';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/products/:id' element={<Product />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App;