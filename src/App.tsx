import React, { useEffect, useState } from 'react';
import './App.css';
import { Joust } from './Components/joust';
import { Stretcher } from './Components/stretcher';
import { Dialogue } from './Components/dialogue';
import { Kids } from './Components/kids';
import { SwapButton } from './Components/SwapButton';
import { Prompt } from './Components/Prompt';


function App(): JSX.Element {
  const [prompt, setPrompt] = useState<string>("Click for more Bobby B quotes");

  return (
    <div className="App">
      <header className="App-header">
        <img src= "https://i.imgflip.com/353b08.png" className="App-logo" alt="logo" />
        <Joust text = "-Bobby B"></Joust>
        <Stretcher></Stretcher>
        <Dialogue text = "YOU HEARD THE MAN, THE KING'S TOO FAT FOR HIS ARMOR, GO FIND THE BREASTPLATE STRETCHER, NOW!"></Dialogue>
        <img src = "http://images6.fanpop.com/image/polls/1368000/1368426_1398531886357_full.jpg?v=1398532217" />
        <Dialogue text = "LANCEL, GODS WHAT A STUPID NAME"></Dialogue>
        <div>
          <Kids type = "first son" name = "Joffery"></Kids>
          <Kids type = "daughter" name = "Myrcella"></Kids>
          <Kids type = "second son" name = "Tommen"></Kids>
        </div>
        <div> 
          <p> </p>
          <Prompt text = {prompt}></Prompt>
          <SwapButton change = {setPrompt}></SwapButton>
        </div>
      </header>
    </div>
  );
}

export default App;
