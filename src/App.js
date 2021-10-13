import React from "react";
import Products from "./component/Products";
import Total from "./component/Total";
const App = ()=>{

 const ShowProduct=(name)=>{
     alert("you selected " + name)
 }

    return(
                  <div>
        <Products name="Samsung" price={120} onShow={ShowProduct} />
        <Products name="Apple" price={150} onShow={ShowProduct}/>
        <Products name="Nokia" price={60} onShow={ShowProduct}/>
        <Total/>
                   </div>
    )
}
export default App;