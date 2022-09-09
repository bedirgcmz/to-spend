import React from "react";
import "./ProductCard.css";

const OneProductCard = ({
  products,
  basket,
  setBasket,
  total,
  money,
  imageNumber,
  setImageNumber,
  allProducts,
  setAllProducts,
  setOneProducts,
  oneProductId,
}) => {
  const product = products.find((item) => item.id === oneProductId);
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
      //Product not added, add it
      setBasket([...basket, product]);
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

  //Deleting items from cart
  const changeImage = (pIndex) => {
    setImageNumber(pIndex);
  };

  //Function to go to all products
  const reviewAllProduct = (pId) => {
    setAllProducts(true);
    setOneProducts(false);
  };

  return (
    <>
      <div className="card mb-3 p-2 oneCart">
        <div className="row g-0">
          <div className="col-md-4 d-flex align-items-center flex-column justify-content-between">
            <img
              src={product.images[imageNumber]}
              className="rounded-start product-image mb-2"
              alt="Product"
            />
            <div className="d-flex align-items-center justify-content-between">
              {product.images.map((productImg, index) => (
                <img
                  onClick={() => changeImage(index)}
                  className="product-litle-img rounded-start me-2"
                  src={productImg}
                  alt=""
                />
              ))}
            </div>
          </div>
          <div className="col-md-8">
            <div className="card-body d-flex h-100 flex-column justify-content-between">
              <div className="d-flex justify-content-between mb-2">
                <div className="text-content">
                  <h5 className="card-title mb-2">{product.title}</h5>
                  <h5 className="text-cente price mb-2">${product.price}</h5>
                  <p className="card-text">
                    <small className="text-muted">In Stock</small>
                  </p>
                  <p className="mt-2">
                    Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
                    ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  </p>
                </div>
                <div
                  onClick={reviewAllProduct}
                  className="eye-close d-flex flex-column align-items-center"
                >
                  <i className="fa-regular fa-eye fs-4 "></i>
                  <span className="">Close</span>
                </div>
              </div>

              <div className="actions d-flex align-items-center justify-content-around">
                <button
                  disabled={!basketItem}
                  onClick={removeFromBaskets}
                  className="one-sell btn btn-primary"
                >
                  -
                </button>
                <span className="one-amount"> {(basketItem && basketItem.amount) || 0} </span>
                <button
                  disabled={total + product.price > money}
                  onClick={addToBasket}
                  className="one-buy btn btn-warning"
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

export default OneProductCard;
