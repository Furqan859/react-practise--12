import React from "react";
const App = ()=>{
    const buy = () => {
      alert("this is button")
    }
    return(<div>
        <h1>This is product Page</h1>
        <button onClick={buy}>buy</button>
    </div>)
}
export default App;