import React, { useContext } from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartbutton.module.css'
import CartContext from '../../store/cart-context'

function HeaderCartButton(props) {
    const cartCtx = useContext(CartContext);
    const numberOfCartItem = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);
    return (
        <button className={classes.button} onClick={props.onClickWorksWhenButtonClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span >Your Cart Item</span>
            <span className={classes.badge}>{numberOfCartItem}</span>

        </button>
    )
}

export default HeaderCartButton
