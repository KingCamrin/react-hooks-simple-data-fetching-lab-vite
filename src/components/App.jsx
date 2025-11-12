// create your App component here
import { useState, useEffect } from 'react'


function App() {

const [dogImage, setDogImage] = useState("");
const [loading, setLoading] = useState(true);



function fetchDog() {
setLoading(true);
fetch('https://dog.ceo/api/breeds/image/random')
.then(response => response.json())
.then(data => {
  setDogImage(data.message);
   setLoading(false);
})
  .catch(error => {
    console.log("error fetching image:", error)
});
}

  
useEffect(() => {
    fetchDog();
}, []);

return (
  <div>
    {loading ? <p>Loading...</p> : <img src={dogImage} alt="A Random Dog" />}
    <button onClick={fetchDog}>Get a new Dog</button>
  </div>
);















}
export default App
