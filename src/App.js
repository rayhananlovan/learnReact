import './App.css';

const Nakama = (props) => {
  console.log(props);
  return(
    <div classname="nakama">
      <p>my name is {props.name}</p>
      <p>my power is{props.power}</p>
    </div>
  )
  }
function App() {
  const greetings = 'Hello Nakama';
  return (
    <div classname="App">
     <h1>{greetings}</h1>
     <Nakama name="luffy" power="Gatling"/>
     <Nakama name="zoro" power="santoryu"/>

    </div>
  ); 
  
  
}

export default App;
