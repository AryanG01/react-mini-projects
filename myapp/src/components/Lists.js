import React from 'react'

const userInfo = [
    {
        username: "Aryan",
        age: 21,
        email: "sample@gmail.com",
        password: "123456"
    },
    {
        username: "John",
        age: 25,
        email: "john@example.com",
        password: "password123"
    },
    {
        username: "Emma",
        age: 30,
        email: "emma@example.com",
        password: "password456"
    },
    {
        username: "Michael",
        age: 35,
        email: "michael@example.com",
        password: "password789"
    }
];

const Lists = () => {
return (
    <>
            {userInfo.map((user) => (
                <ul key = {Math.random() * 100}>
                    <li>{user.username}
                        <ul>
                            <li>Age: {user.age}</li>
                            <li>Email: {user.email}</li>
                            <li>Password: {user.password}</li>
                        </ul>
                    </li>
                </ul>
            ))}
    </>
)
}

export default Lists
