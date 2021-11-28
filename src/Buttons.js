import React from 'react'
import { useState } from "react";

export default function Buttons({ addbtn,cartInc,cartDec }) {
    const [ATC, setATC] = useState("Add to Cart");
  const changeATC=()=>{
    if(ATC === "Add to Cart"){
      setATC("Remove from Cart");
      cartInc();
    }
    else{
      setATC("Add to Cart");
      cartDec();
    }
  }
  if (addbtn === "ViewOptions") {
    return <input type="button" value="View Options" className="btn" />;
  } else {
    return (
      <div>
        <input
          type="button"
          value={ATC}
          className="btn"
          onClick={changeATC}
        />
      </div>
    );
  }
}
