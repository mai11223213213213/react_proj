import React from 'react';
import "./styles/App.css"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  UNSAFE_DataRouterStateContext,
} from "react-router-dom"
import Header from './sections/Header';
import Hero from './sections/Hero';

 
function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/explore' element={<Hero/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;