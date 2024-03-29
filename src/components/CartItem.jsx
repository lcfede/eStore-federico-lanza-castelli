import { Button } from "@mui/material";


export const CartItem = ({ item, addItem, subtractItem }) => {
  return (
    <div className="cart-item__wraper">
      <div>
        <h3>{item.title}</h3>
        <div className="information">
          <p>Price: ${item.price} ~ Stock: {item.stock}</p>
          <p>Total: ${(item.qty * item.price).toFixed(2)}</p>
        </div>
        <div className="buttons">
          <Button
            size="small"
            disableElevation
            variant="outlined"
            onClick={() => subtractItem(item)}
          >
            -
          </Button>
          <p>Quantity: {item.qty}</p>
          <Button
            size="small"
            disableElevation
            disabled={item.qty >= item.stock}
            variant="outlined"
            onClick={() => addItem(item, 1)}
          >
            +
          </Button>
        </div>
      </div>
      <img src={item.image} alt={item.title} />
    </div>
  );
};

export default CartItem;
