import React from "react";

function Cards(props) {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        {props.img ? (
          <img src={props.img} className="card-img-top" alt="..." />
        ) : null}
        {props.children}
      </div>
    </div>
  );
}

export default Cards;
