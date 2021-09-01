import logo from './logo.svg';
import './App.css';
import Christmas from './Christmas';
import snow from './snow.jpg';

var day = new Date().getDate();
var month = new Date().getMonth()+1;
var year = new Date().getFullYear();

function App() {
  return (
    <div className="App">
      <img src = {snow} style = {{width:"100w", height:"100vh"}}alt = "title" />
      <div style ={{position:"absolute", top:"15%", left:"25%" }}>
          <h1 class = "display-1">Christmas Countdown</h1>
          <h1 class = "display-1" style={{fontSize:"40px"}}>Today is : {day}-{month}-{year}</h1>
          <Christmas />
      </div>
    </div>
  );
}

export default App;
