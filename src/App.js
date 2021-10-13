import React, {useState} from "react";
import Products from "./component/Products";
import Total from "./component/Total";



const App = ()=>{


    const  [products , setProducts] = useState([
        {id: 1, name : "Android" , price : 150 , },
        {id: 2, name : "Samsung" , price : 100},
        {id: 3, name : "Nokia" , price : 70},
        {id: 4, name : "Lenovo" , price : 90}
    ])

        const [total , setTotal] = useState(0)
        const calculateTotal =  (price)  => {
            setTotal( total + price)
        }


 const ShowProduct=(name)=>{
     alert("you selected " + name)
 }

    return(
                  <div>
                      {products.map((p) =>  (

                      < Products
                         key={p.id}
                         name={p.name}
                         price={p.price}
                          onShow={ShowProduct} calc={calculateTotal}/>
                      ) ) }
                      <Total totalCash={total}/>

                   </div>
    )
}
export default App;