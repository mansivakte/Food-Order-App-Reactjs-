import Card from "../UI/Card";
import MealItem from "../Meals/MealItems/MealItems";
import classes from "./AvailableMeal.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Indian Thali",
    description: "A Indian Specialty",
    price: 400,
  },
  {
    id: "m2",
    name: "Shahi Paneer",
    description: "Rich, hearty, and nutritious ",
    price: 220,
  },
  {
    id: "m3",
    name: "Misal",
    description: "Misal is a specialty dish of the Indian state of Maharashtra",
    price: 99,
  },
  {
    id: "m4",
    name: "Pav Bhaji",
    description: "Popular street snack",
    price: 150,
  },
  {
    id: "m5",
    name: "Masala Dosa",
    description:
      "A traditional southern Indian dish known as masala dosa is popular throughout the country",
    price: 100,
  },
  {
    id: "m6",
    name: "Pani puri",
    description: "Popular street snack",
    price: 50,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
