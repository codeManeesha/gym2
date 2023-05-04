
import './App.css';
import { Route,Routes } from 'react-router-dom';
import PrizingSection from './Pages/PrizingSection/PrizingSection';
import TrainingSection from './Pages/TraingSection/TrainingSection';
import Navbar from './Navbar/Navbar';
import Home from './Pages/Home/Home';
import AboutUs from './Pages/About/About'
import Login from './Components/form/Login'
import SignUp from './Components/form/SignUp'
import Footer from './Components/Footer/Footer'
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path='/'element={<Home/>}/> 
      <Route path='/aboutUs'element={<AboutUs/>}/> 
      <Route path='/PrizingSection'element={<PrizingSection/>}/> 
      <Route path='/TrainingSection'element={<TrainingSection/>}/> 
      <Route path='/login' element={<Login/>}/>
      <Route path='/signUp' element={<SignUp/>}/>  
    </Routes>
    <Footer/>

    
     
    </div>
  );
}

export default App;
