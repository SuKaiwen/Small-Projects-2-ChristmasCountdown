import logo from './logo.svg';
import './App.css';
import Christmas from './Christmas';

var day = new Date().getDate();
var month = new Date().getMonth()+1;
var year = new Date().getFullYear();

function App() {
  return (
    <div className="App">
      <h1>Christmas Countdown</h1>
      <h1>Today is : {day}-{month}-{year}</h1>
      <Christmas />
    </div>
  );
}

export default App;
