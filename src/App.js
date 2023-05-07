
import './App.css';
import { Route,Routes } from 'react-router-dom';
import PricingSection from './Pages/PricingSection/PricingSection';
import TrainingSection from './Pages/TrainingSection/Training';
import Navbar from './Navbar/Navbar';
import Home from './Pages/Home/Home';
import AboutUs from './Pages/About/About'
import Login from './Components/form/Login'
import SignUp from './Components/form/SignUp'
import Footer from './Components/Footer/Footer'
import NoMatch from './Pages/NoMatch';

import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location]);
  const show = location.pathname ==='/' || location.pathname === '/about' || location.pathname === '/contact';
  return (
    <div className="App">
  { show && <Navbar />}
    <Routes>
    
  
      <Route path='/'element={<Home/>}/> 
      <Route path='/aboutUs'element={<AboutUs/>}/> 
      <Route path='/PricingSection'element={<PricingSection/>}/> 
      <Route path='/TrainingSection'element={<TrainingSection/>}/> 
      <Route path='/login' element={<Login/>}/>
      <Route path='/signUp' element={<SignUp/>}/>  
      <Route path='*' element={<NoMatch/>}/>
    
      
    </Routes>
     {show && <Footer/>}
   

    
     
    </div>
  );
}

export default App;
