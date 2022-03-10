import { Fragment } from "react";
import classes from "./Header.module.css";
import logo from '../../../assets/logo/logo.png'
const Header = (props) => {
  return (
    <Fragment>
      <header>
        <div className={classes.logo}>
          <img className={classes.logoImg} src={logo} alt="logo" />
          <span className={classes.logoText}>OXYG.io</span>
        </div>
        <div className={classes.donate}>
            <p>Total Donate: 11.34$</p>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
