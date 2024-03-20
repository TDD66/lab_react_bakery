const Cake = ({cake}) => {

    const {cakeName, ingredients, price, rating} = cake;

    return (
        <div className="cake">
            <h1>{cakeName}</h1>
            <h2>Price: {price}</h2>
            <h2>Rating: {rating}</h2>
            <ul>
                {ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)}
            </ul>
        </div>
    );
}
 
export default Cake;