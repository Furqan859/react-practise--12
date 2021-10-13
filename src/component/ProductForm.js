import {useState} from "react";

const ProductForm = ({onCreate, index}) => {
    const [name , setName] = useState("");
    const [price , setPrice] = useState(0)
    const createProduct = (event) => {
        event.preventDefault();
        // alert("name " + name + " and " + price +" price ")
        const product = {name, price, id:index}
        onCreate(product);
    }
    return(<form>
        <label>Product Name </label>
        <input type="text" onChange={(e)=>setName(e.target.value)}/> <br/><br/>
        <label>Product Price </label>
        <input type="number" onChange={(e)=>setPrice(e.target.value)}/><br/><br/>
        <button onClick={createProduct}>create</button>
    </form>)
}
export default ProductForm