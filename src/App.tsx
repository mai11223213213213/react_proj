import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  UNSAFE_DataRouterStateContext,
} from "react-router-dom"
import Header from './sections/Header';

 
function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Routes>
        
      </Routes>
    </div>
    </Router>
  );
}

export default App;