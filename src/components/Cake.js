const Cake = ({cake, sellCake}) => {

    const {cakeName, ingredients, price, rating} = cake;

    const handleSellClick = () => {
        sellCake(price);
    }

    return (
        <div className="cake">
            <h1>{cakeName}</h1>
            <h2>Price: {price}</h2>
            <h2>Rating: {rating}</h2>
            <ul>
                {ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)}
            </ul>
            <button onClick={handleSellClick}>Sell Cake</button>
        </div>
    );
}
 
export default Cake;