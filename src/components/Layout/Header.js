import React, { Fragment } from 'react'
import classes from "./Header.module.css"
import mealsImage from '../../assets/meals.jpg'
function Header(props) {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <button>Cart  </button>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt='Pics of meals ' />
            </div>
        </Fragment>
    )
}

export default Header
