import { useState } from "react";
import Cake from "../components/Cake";
import BakeryItemsPayload from './BakeryItemsPayload.json';

import './BakeryContainer.css';

const  BakeryContainer = () => {

    const [totalValueSold, setTotalValueSold] = useState(0);

    const sellCake = (price) => {
        setTotalValueSold(totalValueSold + price);
    }

    const [cakes, setCakes] = useState(BakeryItemsPayload);

    const displayCakes = () => {
        return cakes.map((cake, index) => <Cake key={index} cake={cake} sellCake={sellCake}/>);
    }

    return (
        <div className="bakery-items">
            <h2>Cakes</h2>
            <div className="cakes">
                {displayCakes()}
            </div>
            <h2>Total Value Sold: £{totalValueSold}</h2>
        </div>
    );
}
 
export default BakeryContainer;