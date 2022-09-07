import React, { useState } from "react";
import "./ProductCard.css";
//import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const ProductCard = ({
  product,
  basket,
  setBasket,
  total,
  money,
  imageNumber,
  setImageNumber,
  allProducts,
  setAllProducts,
  setOneProducts,
}) => {
  const [review, setReview] = useState(true);
  //Sepete eklenen urun adeti
  const basketItem = basket.find((item) => item.id === product.id);

  //Sepete urun ekleme fonksiyonu
  const addToBasket = () => {
    const checkBasket = basket.find((item) => item.id === product.id);
    if (checkBasket) {
      //urun var

      checkBasket.amount += 1;

      setBasket([...basket.filter((item) => item.id !== product.id), checkBasket]);
    } else {
      //urun eklenmemis, eklensin
      setBasket([...basket, product]);
      // {
      //   id: product.id,
      //   //title: product.title,
      //   //image: product.image,
      //   amount: 1,
      // },
    }
  };

  //Sepetten urun silme
  const removeFromBaskets = () => {
    const checkBasket = basket.find((item) => item.id === product.id);

    if (checkBasket.amount > 1) {
      checkBasket.amount -= 1;
      setBasket([...basket.filter((item) => item.id !== product.id), checkBasket]);
    } else if (checkBasket.amount === 1) {
      setBasket([...basket.filter((item) => item.id !== product.id)]);
    }
  };

  //urun resmi degistirme fonk
  const changeImage = (pIndex) => {
    setImageNumber(pIndex);
  };

  //detaylari gorme fonk
  const reviewOneProduct = (pId) => {
    setAllProducts(false);
    setOneProducts(true);
  };
  const reviewAllProduct = (pId) => {
    setAllProducts(true);
    setOneProducts(false);
  };

  return (
    <>
      <div className="card mb-3 ">
        <div className="row g-0">
          <div className="col-md-4 d-flex align-items-center flex-column justify-content-center">
            <img
              src={product.images[imageNumber]}
              className="rounded-start product-image"
              alt="Product"
            />
            {/* <div className="d-flex align-items-center justify-content-between">
              {product.images.map((productImg, index) => (
                <img
                  onClick={() => changeImage(index)}
                  className="product-litle-img rounded-start me-2"
                  src={productImg}
                  alt=""
                />
              ))}
            </div> */}
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <div className="d-flex justify-content-between mb-2">
                <div className="text-content">
                  <h5 className="card-title">{product.title}</h5>
                  <h5 className="text-cente price">{product.price} $</h5>
                  <p className="card-text">
                    <small className="text-muted">In Stock</small>
                  </p>
                </div>
                {allProducts && (
                  <div
                    onClick={reviewOneProduct}
                    className="eye-open d-flex flex-column align-items-center"
                    data-bs-toggle="modal"
                    data-bs-target="#static"
                  >
                    <i className="fa-regular fa-eye fs-4 "></i>
                    <span className="">Review</span>
                  </div>
                )}
                {/* {!allProducts && (
                  <div
                    onClick={reviewOneProduct}
                    className="eye-close d-flex flex-column align-items-center"
                    data-bs-toggle="modal"
                    data-bs-target="#static"
                  >
                    <i className="fa-regular fa-eye fs-4 "></i>
                    <span className="">Review</span>
                  </div>
                )} */}
              </div>

              <div className="actions d-flex align-items-center justify-content-around">
                <button
                  disabled={!basketItem}
                  onClick={removeFromBaskets}
                  className="sell btn btn-primary"
                >
                  -
                </button>
                <span className="amount"> {(basketItem && basketItem.amount) || 0} </span>
                <button
                  disabled={total + product.price > money}
                  onClick={addToBasket}
                  className="buy btn btn-warning"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
