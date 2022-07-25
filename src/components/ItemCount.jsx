import React, { useState, useContext } from 'react';
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { Shop } from './context/ShopContext';

export const ItemCount = ({onAdd: setQty, stock, product}) => {

    const [count, setCount] = useState(1);
    const [currentStock, setCurrentStock] = useState(stock);
    const {addItem} = useContext(Shop);

    const addProd = (num) => {
        if (count <= currentStock)
            setCount(count + num);
    }

    const handleAdd = () => {
        setCurrentStock(currentStock - count);
        setCount(1);
        setQty(count);
        addItem(product, count);
    }

  return (
    <div className='itemcount__cointainer'>  
        <ButtonGroup size="medium" aria-label="small outlined button group">
            <Button 
                onClick={() => addProd(-1)}
                disabled={count === 1 ? true : false}
            >-</Button>
            <Button className="itemcount__counter" disabled>{currentStock > 0 ? count : 0}</Button>
            <Button 
                onClick={() => addProd(+1)}
                disabled={count >= currentStock ? true : false}
            >+</Button>
        </ButtonGroup>
        <Button 
            variant="contained"
            color="primary"
            onClick={handleAdd}
        >Add to cart</Button>
    </div>
  )
}
