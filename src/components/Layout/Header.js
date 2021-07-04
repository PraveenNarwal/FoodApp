import React, { Fragment } from 'react'
import classes from "./Header.module.css"
import mealsImage from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton'


function Header(props) {
    return (
        <>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClickWorksWhenButtonClick={props.onshowCartWhenHeaderClick} />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt='Pics of meals ' />
            </div>
        </>
    )
}

export default Header
