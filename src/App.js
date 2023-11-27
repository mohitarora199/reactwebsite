import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import { Home } from './Home';
import { Contact } from './Contact';
import { Service } from './Service';
import { About } from './About';
import { Navbar } from './Navbar';
import Footer from './Footer';

function App() {
  return (
    <>
      
       <BrowserRouter>
       <Navbar/>
      <Routes>
        
          <Route path='/' element={<Home />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          
        
      </Routes>
    </BrowserRouter>
    <Footer/>

    </>
  );
}

export default App;
