import MealSummary from "./MealSummary";
import AvailableMeals from "./AvailableMeals";
import { Fragment } from "react";

const Meal = () => {
  return (
    <Fragment>
      <MealSummary />
      <AvailableMeals />
    </Fragment>
  );
};
export default Meal;
