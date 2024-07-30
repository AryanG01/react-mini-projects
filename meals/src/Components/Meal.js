import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style/style.css";

const Meal = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken")
        .then((res) => {
            setMeals(res.data.meals);
        })
        .catch((err) => {
            console.log("Got the following error: " + err);
        })
    }, []);

    const itemsList = meals.map(({strMeal, strMealThumb, idMeal}) => {
        return (
            <section className="card" key={idMeal}>
                <section className="content">
                    <p>#{idMeal}</p>
                    <p>{strMeal}</p>
                </section>
                <img src={strMealThumb} alt={strMeal} />
            </section>
        )
    });

    return <div className="items-container">{itemsList}</div>;
};

export default Meal;
