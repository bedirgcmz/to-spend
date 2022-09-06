import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, basket, setBasket, total, money }) => {
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

  return (
    <>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4 d-flex align-items-center">
            <img
              src={product.image}
              className="img-fluid rounded-start product-image"
              alt="Product"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              {/* <p className="card-text">
                Lorem Ipsum, kısaca Lipsum, masaüstü yayıncılık ve basın yayın sektöründe kullanılan
                taklit yazı bloğu olarak tanımlanır.
              </p> */}
              <h5 className="text-cente price">{product.price} $</h5>
              <p className="card-text">
                <small className="text-muted">In Stock</small>
              </p>
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
