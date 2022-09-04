import { useEffect, useState } from "react";
import "./App.css";
import products from "./products.json";
import Header from "./components/Header";
import Product from "./components/Product";
import Basket from "./components/Basket";
import * as React from "react";
import Button from "@mui/material/Button";

function App() {
  const [money, setMoney] = useState(100000);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  const resetBasket = () => {
    setBasket([]);
  };
  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return acc + item.amount * products.find((product) => product.id === item.id).price;
      }, 0)
    );
    console.log(total);
  }, [basket]);

  return (
    <div className="App">
      <Header total={total} money={money} />
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          basket={basket}
          setBasket={setBasket}
          total={total}
          money={money}
        />
      ))}
      <Basket basket={basket} />
      <Button variant="contained" onClick={resetBasket}>
        Clear Basket
      </Button>
    </div>
  );
}

export default App;
