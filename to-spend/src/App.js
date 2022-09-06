import { useEffect, useState } from "react";
import "./App.css";
import products from "./products.json";
import Header from "./components/Header";
import Basket from "./components/Basket";
import * as React from "react";
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
      <div className="mt-5 order-1">
        <Grid className="mt-2" container spacing={2}>
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
      </div>

      <button type="button" className="btn  clear-basket" onClick={resetBasket}>
        Clear Basket <i className="fa-solid fa-trash-can-list"></i>
      </button>
      <button
        type="button"
        className="btn my-basket"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Go Basket{" "}
        <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-primary">
          {basket && basket.length}
          <span className="visually-hidden">unread messages</span>
        </span>
      </button>
      <div>
        {/* Button trigger modal  */}
        {/* <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Launch static backdrop modal
        </button> */}

        {/* <!-- Modal --> */}
        <div
          className="modal fade "
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl ">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">
                  My Basket
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <Basket basket={basket} />
              </div>
              <div className="modal-footer d-flex justify-content-between">
                <p className="total-price">
                  <span>Total: </span>
                  <span>
                    {basket.reduce((acc, item) => {
                      return acc + item.amount * item.price;
                    }, 0)}
                  </span>
                  <span> $</span>
                </p>
                <div className="buttons">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                    Close Basket
                  </button>
                  <button type="button" className="btn btn-primary ">
                    Buy Product
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
