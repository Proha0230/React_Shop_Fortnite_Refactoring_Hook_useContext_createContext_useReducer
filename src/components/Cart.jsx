import {useContext} from 'react';
import {ShopContext} from '../context';

function Cart () {
    const {order, handleBasketShow} = useContext(ShopContext);
    const quantity = order.length;

    return(
        <div className="cart light-blue lighten-2 white-text" onClick={handleBasketShow}>
            <i className="material-icons" style={{fontSize: "40px", color: "#000000"}}>local_grocery_store</i>
            {quantity ? (
                <span className="cart_quantity">{quantity}</span>
            ) : null }
        </div>
    );
}

export {Cart};