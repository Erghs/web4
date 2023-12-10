import './App.css';
import Header from './components/Header';
import{Routes, Route, Router}from 'react-router-dom'
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import Content from './components/Content';
import Rating from './components/Rating';
import RatingPage from './components/RatingPage';
import TagsPage from './components/TagsPage';
import Pagination from './components/Pagination';

function App() {

  return (
    <div className="App">
      <Header/>
      <Nav />
       <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/content' element={<Content/>}></Route>
            <Route path='/rating' element={<RatingPage/>}></Route>
            <Route path='/tags' element={<TagsPage/>}></Route>
            <Route path='/pagination' element={<Pagination/>}></Route>
        </Routes>
        <Footer/>
        
     
    </div>
  );
}

export default App;
