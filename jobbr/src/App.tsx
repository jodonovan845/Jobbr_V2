import { Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import MainPage from './pages/MainPage';
import Header from './containers/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
