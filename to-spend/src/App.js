import { useEffect, useState } from "react";
import "./App.css";
import products from "./products.json";
import Header from "./components/Header";
import Product from "./components/Product";

function App() {
  const [money, setMoney] = useState(100);
  const [basket, setBasket] = useState([]);
  useEffect(() => {
    console.log(basket);
  }, [basket]);

  return (
    <div className="App">
      <Header money={money} />
      {products.map((product) => (
        <Product key={product.id} product={product} basket={basket} setBasket={setBasket} />
      ))}
    </div>
  );
}

export default App;
