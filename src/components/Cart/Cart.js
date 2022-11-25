import classes from "./Cart.module.css";
import Modal from "../UI/Model";

const Cart = (props) => {
  const CartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "C1", name: "Sahil", amount: 2, price: 20 }].map((items) => (
        <li>{items.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal>
      {CartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>50</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;
