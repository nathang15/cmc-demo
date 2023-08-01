//This is the main page, the first page that will appear when load the website
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import TrackingPage from './pages/HomePage/TrackingPage'
function App() {
  return (
   <>
    <Header/>
    <TrackingPage/>
   </>
  );
}

export default App;
