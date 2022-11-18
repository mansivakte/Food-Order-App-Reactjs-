import classes from "./Cart.module.css";

const Cart = (props) => {
  const CartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: C1, name: Sahil, amount: 2, price: 20 }].map((items) => (
        <li>{items.name}</li>
      ))}
    </ul>
  );
  return (
    <div>
      {CartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>50</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  );
};
export default Cart;
