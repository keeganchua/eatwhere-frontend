import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import SearchPage from './SearchPage';
import IChoosePage from './IChoosePage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/search" component={SearchPage} />
                <Route path="/ichoose" component={IChoosePage} />
            </Routes>
        </Router>
    );
}

export default App;
