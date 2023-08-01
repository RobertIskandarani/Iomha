import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import Main from './pages/Main';
import NoPage from './pages/NoPage';

const App = () => {
  const [name, setName] = useState('');
  const [artist, setArtist] = useState('Elegí un artista');
  const [place, setPlace] = useState('');
  const [food, setFood] = useState('');
  const Data = {
    name,
    setName,
    artist,
    setArtist,
  };
  const Place = {
    place,
    setPlace,
  };
  const Food = {
    food,
    setFood,
  };

  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          index
          element={<Main data={Data} place={Place} food={Food} />}
        />
        <Route path='*' element={<NoPage />} />
      </Routes>
    </div>
  );
};

export default App;
