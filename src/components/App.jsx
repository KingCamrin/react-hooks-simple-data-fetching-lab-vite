// create your App component here
import { useState, useEffect } from 'react'


function App() {

const [dogImage, setDogImage] = useState("");
const [loading, setLoading] = useState(true);
 
useEffect(() => {
fetch();
}, []);
function fetchdog(){
setLoading(true);
fetch("https://dog.ceo/api/breeds/image/random”")
.then(response => response.json())
.then(data => {
  setDogImage(data.dogImage);
  setLoading(false);
})
  .catch(error => {
    console.log("error fetching image:", error)
});
}





  return (
    <div className="app">
      <h1>Programming Jokes</h1>
      {/* Step 4: Pass the necessary props to JokeDisplay */}
      <JokeDisplay joke={joke} loading={loading} />
      
      {/* Step 5: Pass the function to FetchButton so it can fetch a new joke on click */}
      <FetchButton fetchJoke={fetchJoke} />
    </div>
  )
}

export default App

