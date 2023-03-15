import { Routes, Route } from 'react-router-dom';
import { Airport } from './page/Airport';

import { Home } from './page/Home';

export const Router = () => {
  return(
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/airport' element={<Airport/>}/>
    </Routes>
  )
}