import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Home from './container/Home';
import Category from './container/Category';
import Listing from './container/Listing';
import Contact from './container/Contact';
import Footer from './component/Footer';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/catrgory' element={<Category />} />
        <Route path='/listing' element={<Listing />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
