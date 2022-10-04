import {useContext} from 'react';
import {ShopContext} from '../context';
import { useEffect } from "react";

function Alert () {
    const {alertName, closeAlert} = useContext(ShopContext);
    useEffect (()=> {
        const timerId = setTimeout (closeAlert, 3000);
        return ()=> {
            clearTimeout(timerId);
        };
        // eslint-disable-next-line
    }, [alertName]);

    return (
        <div id="toast-container">
            <div className="toast light-blue lighten-2 black-text" style={{fontSize: "20px", fontWeight:"normal"}}>Товар {alertName} добавлен в корзину</div>
        </div>
    );
}

export {Alert};