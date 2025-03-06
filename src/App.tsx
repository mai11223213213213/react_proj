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
import Partners from './sections/Partners';

 
function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/explore' element={
            <>
              <Hero/>
              <Partners/>
            </>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;