import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import dVox from './components/pages/DVox';


function App() {
  return (
    <>
      <Router>
        <Route path="/" component={dVox}/>
      </Router>
    </>
  );
}

export default App;
