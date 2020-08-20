import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                //this nested map function acts as a sort of for loop that
                //just loops the amount of times defined by the number value
                //within props.ingredients[igKey] where igKey is the ingredient name.
                //i is used to provide keys for the components, ex.) "cheese1", "cheese2"...
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            });
        }).reduce((arr, el) => {
            return arr.concat(el);
        }, []);
    //Handles case where all ingredients are 0 in BurgerBuilder
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;