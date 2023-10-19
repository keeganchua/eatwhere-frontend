import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import QuickSearch from './QuickSearch';
import IChoose from './IChoose';

function App() {
  return (
    <div className="App">
      <h1>Eat Where?</h1>
      <a href="/quicksearch">Quick Search</a>
      <a href="/ichoose">I Choose</a>
      <Routes>
        <Route path="/quicksearch" element={<QuickSearch />} />
        <Route path="/ichoose" element={<IChoose />} />
      </Routes>
    </div>
  );
}

export default App;
