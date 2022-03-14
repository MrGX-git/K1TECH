import { Routes, Route} from 'react-router-dom'

import { Header } from './components/header';
import { Footer } from './components/footer';
// import { Layout } from './components/layout';

import { Home } from './pages/home';
import { Products } from './pages/products'
import { Banner } from './pages/banner'
import { Slider } from './pages/slider'

import './App.css';

function App() {
  return (
    <div className="App containers">
      <Header />
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/banner' element={<Banner />} />
        <Route path='/slider' element={<Slider />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
