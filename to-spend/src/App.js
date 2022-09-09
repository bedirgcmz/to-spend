import { useEffect, useState } from "react";
import "./App.css";
import products from "./products.json";
import Header from "./components/Header";
import Basket from "./components/Basket";
import * as React from "react";
import Grid from "@mui/material/Grid";
import ProductCard from "./components/ProductCard";
import OneProductCard from "./components/OneProductCard";

function App() {
  const [money, setMoney] = useState(100000);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);
  const [allProducts, setAllProducts] = useState(true);
  const [oneProducts, setOneProducts] = useState(false);
  const [imageNumber, setImageNumber] = useState(0);
  const [oneProductId, setOneProductId] = useState(0);

  const resetBasket = () => {
    setBasket([]);
  };
  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return acc + item.amount * products.find((product) => product.id === item.id).price;
      }, 0)
    );
  }, [basket, oneProductId]);

  return (
    <div className="App">
      <Header total={total} money={money} />
      {allProducts && (
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
                      imageNumber={imageNumber}
                      allProducts={allProducts}
                      setAllProducts={setAllProducts}
                      setOneProducts={setOneProducts}
                      setOneProductId={setOneProductId}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </div>
      )}
      {oneProducts && (
        <OneProductCard
          products={products}
          basket={basket}
          setBasket={setBasket}
          total={total}
          money={money}
          imageNumber={imageNumber}
          setImageNumber={setImageNumber}
          setAllProducts={setAllProducts}
          setOneProducts={setOneProducts}
          oneProductId={oneProductId}
        />
      )}

      <button type="button" className="btn  clear-basket" onClick={resetBasket}>
        <i className="fa-regular fa-trash-can"></i> Clear Basket
      </button>
      <button
        type="button"
        className="btn my-basket"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Go Basket <i className="fa-solid fa-cart-shopping"></i>
        <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-primary">
          {basket && basket.length}
          <span className="visually-hidden">unread messages</span>
        </span>
      </button>
      <div>
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
                  <span>$</span>
                  <span>
                    {basket.reduce((acc, item) => {
                      return acc + item.amount * item.price;
                    }, 0)}
                  </span>
                </p>
                <p>
                  {total ? (
                    <h6>You have ${money - total} left to spend</h6>
                  ) : (
                    <h6> You have ${money} to spend</h6>
                  )}
                </p>
                <div className="buttons">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                    Close Basket
                  </button>
                  <button type="button" className="btn btn-primary ms-3">
                    Buy Products
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
