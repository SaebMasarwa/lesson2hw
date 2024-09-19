import React from 'react';
import './App.css';
import Courses from './components/Courses';
import Footer from './components/Footer'

function App() {
  let developerName: string = "Saeb Masarwa";
  return (
    <div className="App">
      <h1 style={{backgroundColor: "yellow"}}>Saeb Masarwa</h1>
      <p style={{color: "red"}}>saeb2312@live.com</p>
      <Courses />
      <Footer developer = {developerName} />
    </div>
  );
}

export default App;
