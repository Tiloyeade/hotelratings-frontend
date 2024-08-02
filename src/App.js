// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RatingForm from './RatingForm';
import RatingList from './RatingList';
import ThankYou from './ThankYou';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Hotel Rating App</h1>
        </header>
        <Routes>
          <Route path="/" element={<RatingForm />} />
          <Route path="/ratings" element={<RatingList />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
