
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from './components/Title/Title';
import './assets/css/style.css'


function App() {
 

  return (
    <div className='App'>
     <Router>
          <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
            </Routes>
        </Router>
    </div>
  )
}

export default App
