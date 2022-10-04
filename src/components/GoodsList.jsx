import {useContext} from 'react';
import {ShopContext} from '../context';
import { GoodsItem } from "./Goodsitem";

function GoodsList () {
    const {goods = []} = useContext(ShopContext);
    if(goods.lenght) {
        return <h3>Nothing here</h3>;
    }
    return (
        <div className="goods">
            {goods.map ((item) => (
                <GoodsItem key={item.mainId} {...item}/>
            ))}
        </div>
    );
}

export {GoodsList};