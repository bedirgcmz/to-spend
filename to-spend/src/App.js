import { useEffect, useState } from "react";
import "./App.css";
import products from "./products.json";
import Header from "./components/Header";
import Basket from "./components/Basket";
import * as React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import ProductCard from "./components/ProductCard";

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
    console.log(basket);
  }, [basket]);

  return (
    <div className="App">
      <Header total={total} money={money} />
      <Grid container spacing={2}>
        <Grid item xs={8} className="m-auto">
          <Grid container spacing={2}>
            {products.map((product) => (
              <Grid item xs={6}>
                <ProductCard
                  key={product.id}
                  product={product}
                  basket={basket}
                  setBasket={setBasket}
                  total={total}
                  money={money}
                />
              </Grid>
            ))}
          </Grid>
          {/* {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              basket={basket}
              setBasket={setBasket}
              total={total}
              money={money}
            />
          ))} */}
        </Grid>
        {/* <Grid item xs={4}>
          <Basket basket={basket} />
        </Grid> */}
      </Grid>
      <Button variant="contained" onClick={resetBasket}>
        Clear Basket
      </Button>
      <Button
        type="button"
        class="btn  my-basket"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Go Basket
      </Button>
      <div>
        {/* Button trigger modal  */}
        {/* <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Launch static backdrop modal
        </button> */}

        {/* <!-- Modal --> */}
        <div
          class="modal fade "
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">
                  My Basket
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <Basket />
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                  Close Basket
                </button>
                <button type="button" class="btn btn-primary ">
                  Buy Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
