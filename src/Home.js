import { useState } from "react";
import { data } from "./data";
import Food from "./Food";
import Buttons from "./Buttons";

import image from "./menu.webp";
import "./App.css";
import Footer from "./Footer";

function Home() {
  const [food, setFood] = useState(data);

  const chosenFood = (searchTerm) => {
    const newFood = data.filter((element) => element.searchTerm === searchTerm);
    setFood(newFood);
  };
  return (
    <div>
      <div className="chickenBoxOne">
        <img className="chicken" src={image} alt="chicken" />
        <div className="chickenBoxTwo">
          <p className="delivery">
            Delivery of the tasty dishes only in 60 minutes
          </p>
        </div>
      </div>

      <div>
        <Buttons filteredFood={chosenFood} />
        <Food itemsForSale={food} />
        <Footer />
      </div>
    </div>
  );
}
export default Home;
