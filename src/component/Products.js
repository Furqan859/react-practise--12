import React , {useState} from "react";
const Products = () => {
    const [quantity , setQuantity] = useState(0);

    const buy = () => {
        // alert("this is button")
        setQuantity(quantity +1 )
    }
    return(<div>
        <h1>This is product Page</h1>
        <button onClick={buy}>buy</button>
        <h2>Quantity : {quantity}</h2>
    </div>)
}
export default Products;