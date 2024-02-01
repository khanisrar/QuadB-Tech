import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar';
import MoviesList from './Components/MoviesList';
import MovieDetails from './Components/MovieDetails';
import Form from './Components/Form';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<MoviesList />} />
          <Route path='/movie-details/:id' element={<MovieDetails />} />
          <Route path='/form/:id' element={<Form />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App;