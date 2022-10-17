import React, { Fragment } from "react";
import classes from "./Header.module.css";
import mealImage from "../../assets/indianmeal.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Order Your Meal</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImage} alt="Indial Food"></img>
      </div>
    </Fragment>
  );
};

export default Header;
