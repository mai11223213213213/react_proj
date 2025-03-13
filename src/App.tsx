import React from 'react';
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
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
import Auctions from './sections/Auctions';

 
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
              <Auctions/>
            </>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;