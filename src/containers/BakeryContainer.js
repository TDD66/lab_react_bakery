import Cake from "../components/Cake";

const  BakeryContainer = () => {
    
    const victoriaSponge = {
        cakeName: "Victoria Sponge",
        ingredients: ["eggs", "butter", "sugar", "self-raising flour", "baking powder", "milk"],
        price: 5,
        rating: 5
    }

    const teaLoaf = {
        cakeName: "Tea Loaf",
        ingredients: ["eggs", "oil", "dried fruit", "sugar", "self-raising flour", "strong tea"],
        price: 2,
        rating: 3
    }

    const carrotCake = {
        cakeName: "Carrot Cake",
        ingredients: ["carrots", "walnuts", "oil", "cream cheese", "flour", "sugar"],
        price: 8,
        rating: 5
    }

    const cakes = [victoriaSponge, teaLoaf, carrotCake];

    const displayCakes = () => {
        return cakes.map((cake, index) => <Cake key={index} cake={cake}/>);
    }

    return (
        <div className="cakes">
            <h2>Cakes:</h2>
            {displayCakes()}
        </div>
    );
}
 
export default BakeryContainer;