import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes.box}>
        <img
          src={props.image}
          alt={props.title}
        />
        <div className={classes.box_content}>
          <h3 className={classes.title}>Rent</h3>
          <span className={classes.post}>{props.rent}</span>
        </div>
        <ul className={classes.icon}>
          <li>{props.size}</li>
          <li>{props.situation}</li>
          <li>{props.location}</li>
        </ul>
      </div>

     
    </div>
  );
};

export default Card;


