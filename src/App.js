import React from 'react';
import './App.css';
import Card from './components/Cards'
import India from './components/IndiaCard'
import WorldTable from './components/WorldStatTable';
import Icons from './components/Icons'
import Navbar from './components/Navbar'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Card />
      <India />
      <WorldTable />
      <Icons />
    </div>
  );
}

export default App;
