import logo from './logo.svg';
import './App.css';
import Devices from './components/Devices/Devices';
import Watch from './components/Watch/Watch';


function App() {

  return (
    <div className="App" >
      <Devices name='iPhone'></Devices>
      <Watch></Watch>

    </div>
  );
}

export default App;
