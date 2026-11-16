import React from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import './index.css';
function App(){
  return(
  <div>
    <Navbar /> 
    <div className='container'>
      <Card id='ID 1' name='janani' dept='BE CSE' year='3rd year'/>
      <Card id='ID 2' name='jayasakthi' dept='BE IT' year='1st year'/>
      <Card id='ID 3' name='shirley' dept='BE AIDS' year='2nd year'/>
    </div>
  </div>
  );
}
export default App;
