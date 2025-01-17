import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Scroll  from './Components/GoToTop/GoToTop';
import RegisterAndLogin from './Pages/Home/register/RegisterAndLogin';

function App() {
  return (
    <div className="App">
       <Scroll />
      <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<RegisterAndLogin/>} />
        </Routes>
    </div>
  );
}

export default App;