import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Test from './components/Test';
import 'bootstrap/dist/css/bootstrap.min.css';

import{BrowserRouter as Router , Route , Routes} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/test' element={<Test/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
