import React from 'react'
import {Routes,Route} from 'react-router-dom';
import { AllItems } from '../Components/AllItems/AllItems';
export const Router = () => {
  return (
   <Routes>
    <Route path="/" element={<AllItems />} />
   </Routes>
  )
}

