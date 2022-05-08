import './App.css';
import Title from './Title';
import GifButton from './GifButton';
import GifDisplay from './GifDisplay';
import { useState } from "react";


function App() {
  const API_KEY = "91BZ9whqlbROewOl0PawVcm35644DmJV";

  const [gif, setGif] = useState(null);  //store gif value, comes with the function that updates the gif
  
  const getGif = async() => {
    //make API call
  const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=`)
    //converting the response to js object
  const data = await response.json() //just an object with different data
    //updating the state
   setGif(data)  //use function that updates the variable that you already created above
  }
  return (
    <div className="App">
      <Title />
      <GifButton getGif={getGif} />
      <GifDisplay gif={gif} />
    </div>
  );
}

export default App;
