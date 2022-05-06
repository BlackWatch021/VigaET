import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Home from './components/Home';
import Carousel1 from './components/carousel/Carousel_1'
import Carousel2 from './components/carousel/Carousel_2'
import Carousel3 from './components/carousel/Carousel_3'
import Carousel4 from './components/carousel/Carousel_4'
import Login from './components/Login'
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/intro1' element={<Carousel1 />} />
          <Route path='/intro2' element={<Carousel2 />} />
          <Route path='/intro3' element={<Carousel3 />} />
          <Route path='/intro4' element={<Carousel4 />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Router>
      {/* <Home /> */}
      {/* <Carousel1 /> */}
      {/* <Carousel2 /> */}
      {/* <Carousel3 /> */}
      {/* <Carousel4 /> */}
    </div>
  );
}

export default App;
