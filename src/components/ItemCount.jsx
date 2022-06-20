import React, { useState } from 'react';
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

export const ItemCount = ({onAdd, stock}) => {

    const [count, setCount] = useState(1);
    const [currentStock, setCurrentStock] = useState(stock);

    const addProd = (num) => {
        if (count <= currentStock)
            setCount(count + num);
    }

    const handleAdd = () => {
        onAdd();
        setCurrentStock(currentStock - count);
        setCount(1);
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
        <hr/>
        <Button 
            size="medium" 
            variant="outlined"
            onClick={handleAdd}
        >Añadir</Button>
    </div>
  )
}
