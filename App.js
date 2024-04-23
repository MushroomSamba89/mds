import React, { useState} from "react";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Counter from "./components/Counter";


function App() {
  const [logged, setLogged]= useState(false)


  return <>
  {logged? <Welcome /> : <Login state={[logged, setLogged]} />}
  
  </>
}

<Counter />
export default App;