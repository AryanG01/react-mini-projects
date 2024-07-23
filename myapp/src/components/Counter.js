import { useEffect, useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`useEffect called ${count}`);
        document.title = `Count ${count}`;
    })

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        if (count === 0) {
            setCount(0);
        } else {
            setCount(count - 1);
        }
    }

    return (
        <>
            <h1>{count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </>
    )
}

export default Counter
