import { useState } from "react";
import { data } from "./dataTwo";
import './App.css';

function App() {
  
  const [foto, setFoto] = useState(0);
  const {image} = data[foto];
  
const previousFoto = (i) => {
  setFoto((foto => {
    foto --;
    if (foto < 0) { 
      foto = data.length - 1;
  }
    return foto;
  }))
}

const nextFoto = () => {
setFoto((foto => {
  foto ++;
  if (foto > data.length -1) {
    foto = 0; 
}
  return foto;
}))
}
  return(<div>

  
    <div className="btnSlides">
     <button className="btnSlidesBack" onClick={previousFoto}>back</button>
     <img src={image} alt="restaurant"/>
     <button className="btnSlidesNext" onClick={nextFoto}>next</button>
    </div>


  </div>
  ) 
}
export default App;

