import "./App.css";
import data from "./data.js";
import { useState } from "react";
import Cards from "./Cards";
import AddtoCart from "./AddtoCart";

function App() {
  
  const [add, setAdd] = useState(0);
  const cartDec =() => {
    setAdd(add-1)
  }
  const cartInc = () => {
    setAdd(add+1)
  }
  return (
    <div>
      <AddtoCart add={add}/>
      <div className="container">
        {data.map(({ id, title, star, price, btn, sale }) => {
          return (
            <div>
              <Cards
                itemTitle={title}
                itemStar={star}
                itemPrice={price}
                itemSale={sale}
                itemBtn={btn}
                cartInc={cartInc}
                cartDec={cartDec}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}


export default App;
