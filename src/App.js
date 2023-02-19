import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import About from './pages/About';
import Contact from './pages/Contact';
import Videos from './pages/Videos';

function App() {
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path='/' element={<Videos/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;