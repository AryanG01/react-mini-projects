import React from 'react'

const Props = ({img, name, hobbies, children}) => {
  return (
    <section>
      <img src={img} alt={name} />
      <h1>Hi, my name is {name}</h1>
      <h3>My favorite foods: {hobbies}</h3>
      <p>{children}</p>
    </section>
  )
}

export default Props
