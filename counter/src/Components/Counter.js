import React, { useState } from 'react'
import '../style/style.css'

const Counter = () => {

    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => {
        if(count > 0) {
            setCount(count - 1);
        }
    }
    const reset = () => setCount(0);

    return (
        <>
            <h1 className="heading">Counter</h1>
            
            <div className="container">
                <h1 className="number">{count}</h1>
            </div>

            <section className="btns-contianer">
                <button onClick={increment} className="increment">+</button>
                <button onClick={decrement} className="decrement">-</button>
                <button onClick={reset} className="reset">Reset</button>
            </section>
        </>
    )
}

export default Counter
