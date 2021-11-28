import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Stars from "./Stars";
import Buttons from "./Buttons";

export default function Cards({
  id,
  itemTitle,
  itemStar,
  itemPrice,
  itemBtn,
  itemSale,
  cartInc,
  cartDec,
}) {
  return (
    <div>
      <Card className="card-area">
        <div>
          <p className="sale">{itemSale}</p>
          <img
            src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
            alt="title"
          />
        </div>
        <div>
          <CardContent className="card-content">
            <h3 className="title">{itemTitle}</h3>
            <Stars star={itemStar} />
            <p className="price">{itemPrice}</p>
          </CardContent>
        </div>
        <div>
          <Buttons addbtn={itemBtn} cartInc={cartInc} cartDec={cartDec} />
        </div>
      </Card>
    </div>
  );
}
