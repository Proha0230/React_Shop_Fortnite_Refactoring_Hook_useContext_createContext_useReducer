import {useContext} from 'react';
import {ShopContext} from '../context';

import {BasketItem} from "./BasketItem";

function BasketList () {
    const {order = [], handleBasketShow} = useContext(ShopContext);

    const totalPrice = order.reduce((sum,el) => {
        return sum + el.price * el.quantity;
    }, 0);

    return (
        <ul className="collection basket-list">
            <li className="collection-item active" style={{fontSize:"25px", backgroundColor:"aqua", color:"black"}}>Корзина</li>
            {order.length ? (
                order.map((item) => <BasketItem key = 
                {item.mainId} 
                {...item}/>)
            ): ( 
                <li className="collection-item" style={{fontSize:"20px"}}>Корзина пуста</li>    
            )}
            <li className="collection-item active" style={{fontSize:"25px", backgroundColor:"aqua", color:"black"}}>Общая стоимость: {totalPrice} руб. </li>
            <li className="collection-item">
                <button className="btn btn-small">Оформить Заказ</button>
            </li>
            <i className="material-icons basket-close" onClick={handleBasketShow}>close</i>
        </ul>
    );
}

export {BasketList};