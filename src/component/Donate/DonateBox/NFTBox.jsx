import React from "react";
import classes from "./NFTBox.module.css";

const NFTBox = (props) => {
  let item = props.item;

  return (
    <section>
      <div className={classes.box}>
        {item.map((item) => (
          <div
            className={classes.boxx}
            key={Math.random().toString(36).slice(2)}
          >
            <img src={item.img} alt={item.id} />
            <p>{item.title}</p>
            <span>
              <a href="#">{props.link}</a>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NFTBox;
