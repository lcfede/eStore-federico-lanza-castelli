import React, { useState } from 'react'

const Nikes = () => {

    const [num, setNum] = useState("01");

    const handleChange = e => {
        const number = e.target.value.toString().padStart(2, "01");
        setNum(number);
    }

    return (
        <div className="nikes-container">
            <h1 className='item-list-container__title'>View the new NIKE in 360°</h1>
            <figure>
                <img src={`/imgs/nikes/img${num}.jpg?=format,compress&q=90&update_at=1606321430&w=1000`} alt="nikes" />
            </figure>
            <div>
                <input type="range" min="1" max="36" style={{ width: "500px", margin: "auto" }} onChange={handleChange} value={num}/>
            </div>
        </div>
    )
}

export default Nikes