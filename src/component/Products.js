import React , {useState} from "react";
const Products = ({price, name , onShow}) => {
    const [quantity , setQuantity] = useState(0);


    const Buy = () => {
        // alert("this is button")
        setQuantity(quantity +1 )
    }
    return(<div>
        <h1>This is product Page</h1>
        {/* eslint-disable-next-line no-restricted-globals */}
        <h3>{name}</h3>
        <p>{price}</p>
        <button onClick={Buy}>buy</button>
        <button onClick={()=>onShow(name)}>Show</button>

        <h2>Quantity : {quantity}</h2>
        <hr/>
    </div>)
}
export default Products;