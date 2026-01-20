 import React from 'react'
import IndexOne from './Index'
import GlobalLayoutFix from './GlobalLayoutFix'
 import Footer from './Components/Footer/Footer'
import Contact from './Components/Contact/Contact'
import Residential from './Services/Eps/Residential/Residential'
import IndustrialCommercial from './Services/Eps/Industrial/IndustrialCommercial'
import AgriculturalForestry from './Services/Eps/AgriculturalForestry/AgriculturalForestry'
import Products from './Services/Products/Products'
import { Route, Routes } from 'react-router-dom'
import AboutPage from './components/AboutUs/AboutUs'
import ScrollToTop from './ScrollToTop/ScrollToTop'
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy'
import TermsConditions from './Components/TermsConditions/TermsConditions'
import FloatingWhatsApp from './Components/FloatingWhatsApp/FloatingWhatsApp'

 
 function App() {
   return (
     <div className='App'>
      <ScrollToTop/>
       <GlobalLayoutFix/>
    


     <Routes>
      <Route path="/terms-conditions" element={<TermsConditions />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path='/top' element={<IndexOne/>}/>
      <Route path="/" element={ <>
              <IndexOne />
            </>}/>
      <Route path='/residential' element={<Residential/>}/>
       <Route path='/IndustrialCommercial' element={<IndustrialCommercial/>}/>
        <Route path='/AgriculturalForestry' element={<AgriculturalForestry/>}/>
         <Route path='/Product' element={<Products/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/contact" element={<Contact/>}/>
           
     </Routes>
     <FloatingWhatsApp/>
     </div>
   )
 }
 
 export default App
 