 import React from 'react'
 import Home from '../Pages/Home/Home'
 import WhyChooseUs from '../Pages/WhoChoose/WhoChoose'
    import About from '../Pages/About/AboutSection'
    import Values from '../Pages/Values/Values'
    import Benefits from '../Pages/Benifits/Benfit'
    import Services from '../Pages/Services/Services'
    import Choose from '../Pages/Choose/Choose'
    import OurProjects from '../Pages/OurProjects/Ourprojects'
    import CompanyPresence from '../Pages/CompanyPresence/CompanyPresence'
    import CMDSection from '../Pages/BoardOfDirectors/BoardOfDirectors'
    import CertificationSlider from '../Pages/CertificationSlider/CertificationSlider'
    import OEMPartners from '../Pages/AffliatedWith/OEMPartners'
    import QualityExcellence from '../Pages/QualityExcellence/QualityExcellence'
import Footer from '../Components/Footer/Footer'
    
 
 function IndexOne() {
   return (
     <div className='App'>
       
       <Home/>
      <About/>
      <Values/>
      <WhyChooseUs/>
      <Benefits/>
      <Services/>
      <Choose/>
      <OurProjects/>
      <CompanyPresence/>
      <CMDSection/>
      <CertificationSlider/>
      <OEMPartners/>
      <QualityExcellence/>
      <Footer/>
      
     </div>
   )
 }
 
 export default IndexOne
 