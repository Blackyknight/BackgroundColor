import Background from "./component/Background";
import {useState} from 'react';
import './styles/App.css';

const colors = ['red', 'blue', 'green', 'black', 'white', 'yellow', 'pink', 'purple'];

function App() {
  const [color, setColor] = useState(colors[4]); 

  function getRandom(){
    return Math.floor(Math.random() * colors.length);
  }

  function getRandomColor(){
    const newNumber = getRandom();
    setColor(colors[newNumber]);
    document.body.style.backgroundColor = colors[newNumber];
  }

  function onClickRed(){
    setColor(colors[0])
    document.body.style.backgroundColor = colors[0];
  }

  function onClickBlue(){
    setColor(colors[1])
    document.body.style.backgroundColor = colors[1];
  }

  function onClickGreen(){
    setColor(colors[2])
    document.body.style.backgroundColor = colors[2];
  }

  function onClickBlack(){
    setColor(colors[3])
    document.body.style.backgroundColor = colors[3];
  }

  function onClickWhite(){
    setColor(colors[4])
    document.body.style.backgroundColor = colors[4];
  }

  function onClickYellow(){
    setColor(colors[5])
    document.body.style.backgroundColor = colors[5];
  }

  function onClickPink(){
    setColor(colors[6])
    document.body.style.backgroundColor = colors[6];
  }

  function onClickPurple(){
    setColor(colors[7])
    document.body.style.backgroundColor = colors[7];
  }

  return (
    <div>
      <h1 className='title'>Color Flipper</h1>
      <Background color={color} onClick={getRandomColor} onClickRed={onClickRed} onClickBlue={onClickBlue} onClickGreen={onClickGreen} onClickBlack={onClickBlack} 
      onClickWhite={onClickWhite}
      onClickYellow={onClickYellow}
      onClickPink={onClickPink} 
      onClickPurple={onClickPurple}/>
    </div>
  );
}

export default App;
