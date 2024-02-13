import './App.css';
import Button from './components/Button';
import Heading from './components/Heading';

function App() {
  return (
    <div className="App">
      <Heading text={0}/>
      <Button text={"Add"} textColor={"white"} backgroundColor={"black"}/>
    </div>
  );
}

export default App;
