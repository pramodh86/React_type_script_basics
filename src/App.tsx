

import { useState } from 'react';
import './App.css'
import Button from './Componants/Button';
import ListView from './Componants/ListView';
import Alert from './Componants/Alert';

function App() {
  

  const colors = ['red','green','blue','black','yellow'];

  const handleClick = (item:string) =>{
    console.log(item);
  };

  const handleClickTwo = () =>{
    console.log("Clicked");
  };

  const [alertVisable, setAlertVisibility] = useState(false);

  return (
    <>
      {alertVisable && <Alert onColse={()=>setAlertVisibility(false)}><span> Hello</span></Alert>
    }
      <ListView items={colors} heading="My React App" handleClick={handleClick}></ListView>
      <Button children="click" onClick={()=>setAlertVisibility(true)}></Button>
      
    </>
  )
}

export default App
