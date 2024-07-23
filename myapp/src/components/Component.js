import React from 'react'

const myName = 'Aryan';
const multiply= (a, b) => a * b;
const specialClass = 'special';

const Component = () => {
  return (
    <>
        {/* Rendering Variable Names */}
        <h1>Hi, my name is {myName}</h1>

        {/* Rendering Expressions */}
        <p>2 + 2 = {2 + 2}</p>

        {/* Rendering Arrays */}
        <p>My friends list:{["A", 'B', 'C']}</p>

        {/* Rednering Functional Value */}
        <p>2 * 2 = {multiply(2, 2)}</p>

        {/* Rendering Classes */}
        <p className={specialClass}> This uses className={specialClass}</p>
    </>
  )
}

export default Component
