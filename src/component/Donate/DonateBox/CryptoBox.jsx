import React from "react";
import classes from "./CryptoBox.module.css";

const CryptoBox = (props) => {
  let item = props.item;

  return (
    <div className={classes.box}>
      {item.map((item) => (
        <div className={classes.boxx} key={Math.random().toString(36).slice(2)}>
          <img src={item.img} alt={item.id} />
          <br />
          <p id={item.adress} hidden>
            {item.adress}
          </p>
          <span>
            <button onClick={() => navigator.clipboard.writeText(item.adress)}>
              {props.link}
            </button>
          </span>
        </div>
      ))}
    </div>
  );
};

export default CryptoBox;
