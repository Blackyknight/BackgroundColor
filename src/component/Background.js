import '../styles/Background.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrush } from '@fortawesome/free-solid-svg-icons'

function Background({color, onClick, onClickRed, onClickBlack, onClickBlue, onClickGreen, onClickPink, onClickPurple, onClickWhite, onClickYellow}){
  return (
    <div>
      <p>Background Color: <i>{color}</i></p>
      <div className="rainbow">
        <button className="red" onClick={onClickRed}>
          <FontAwesomeIcon icon={faBrush} style={{color: "#ff0000",}} />
        </button>
        <button className="blue" onClick={onClickBlue}>
          <FontAwesomeIcon icon={faBrush} style={{color: "#005eff",}} />
        </button>
        <button className="green" onClick={onClickGreen}>
          <FontAwesomeIcon icon={faBrush} style={{color: "#11ff00",}} />
        </button>
        <button className="black" onClick={onClickBlack}>
          <FontAwesomeIcon icon={faBrush} style={{color: "#000",}} />
        </button>
        <button className="white" onClick={onClickWhite}>
          <FontAwesomeIcon icon={faBrush} style={{color: "#fff",}} />
        </button>
        <button className="yellow" onClick={onClickYellow}>
          <FontAwesomeIcon icon={faBrush} style={{color: "#fbff00",}} />
        </button>
        <button className="pink" onClick={onClickPink}>
         <FontAwesomeIcon icon={faBrush} style={{color: "#ff00dd",}} />
        </button>
        <button className="purple" onClick={onClickPurple}>
         <FontAwesomeIcon icon={faBrush} style={{color: "#850073",}} />
        </button>
        <button className='allColor' onClick={onClick}>Random</button>
      </div>
    </div>
  );
}

export default Background;