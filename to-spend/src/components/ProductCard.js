import React from "react";
import "./ProductCard.css";

const ProductCard = ({
  product,
  basket,
  setBasket,
  total,
  money,
  imageNumber,
  allProducts,
  setAllProducts,
  setOneProducts,
  setOneProductId,
}) => {
  //Has this item been added to the cart?
  const basketItem = basket.find((item) => item.id === product.id);

  //Add product to cart function
  const addToBasket = () => {
    const checkBasket = basket.find((item) => item.id === product.id);
    if (checkBasket) {
      //There is a product
      checkBasket.amount += 1;

      setBasket([...basket.filter((item) => item.id !== product.id), checkBasket]);
    } else {
      //product not added, add it
      setBasket([...basket, product]);
    }
  };

  //Deleting items from cart
  const removeFromBaskets = () => {
    const checkBasket = basket.find((item) => item.id === product.id);

    if (checkBasket.amount > 1) {
      checkBasket.amount -= 1;
      setBasket([...basket.filter((item) => item.id !== product.id), checkBasket]);
    } else if (checkBasket.amount === 1) {
      setBasket([...basket.filter((item) => item.id !== product.id)]);
    }
  };

  //Function to go to product details
  const reviewOneProduct = (pId) => {
    setAllProducts(false);
    setOneProducts(true);
    setOneProductId(pId);
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
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <div className="d-flex justify-content-between mb-2">
                <div className="text-content">
                  <h5 className="card-title">{product.title}</h5>
                  <h5 className="text-cente price">${product.price}</h5>
                  <p className="card-text">
                    <small className="text-muted">In Stock</small>
                  </p>
                </div>
                {allProducts && (
                  <div
                    onClick={() => reviewOneProduct(product.id)}
                    className="eye-open d-flex flex-column align-items-center"
                    data-bs-toggle="modal"
                    data-bs-target="#static"
                  >
                    <i className="fa-regular fa-eye fs-4 "></i>
                    <span className="">Review</span>
                  </div>
                )}
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
