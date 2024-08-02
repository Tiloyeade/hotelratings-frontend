import React from 'react';
import RatingForm from './RatingForm';
import RatingList from './RatingList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hotel Rating App</h1>
      </header>
      <RatingForm />
      <RatingList />
    </div>
  );
}

export default App;
