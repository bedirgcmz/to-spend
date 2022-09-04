import React from "react";
import "./Product.css";

const Product = ({ product, basket, setBasket, total, money }) => {
  //Sepete eklenen urun adeti
  const basketItem = basket.find((item) => item.id === product.id);

  //Sepete urun ekleme fonksiyonu
  const addToBasket = () => {
    const checkBasket = basket.find((item) => item.id === product.id);
    if (checkBasket) {
      //urun var
      console.log(checkBasket);
      checkBasket.amount += 1;
      console.log(checkBasket);
      setBasket([...basket.filter((item) => item.id !== product.id), checkBasket]);
    } else {
      //urun eklenmemis, eklensin
      setBasket([
        ...basket,
        {
          id: product.id,
          //title: product.title,
          //image: product.image,
          amount: 1,
        },
      ]);
    }
  };

  //Sepetten urun silme
  const removeFromBaskets = () => {
    const checkBasket = basket.find((item) => item.id === product.id);
    console.log(checkBasket);
    if (checkBasket.amount > 1) {
      checkBasket.amount -= 1;
      setBasket([...basket.filter((item) => item.id !== product.id), checkBasket]);
    } else if (checkBasket.amount === 1) {
      setBasket([...basket.filter((item) => item.id !== product.id)]);
    }
  };
  return (
    <div className="product">
      <h5 className="title">{product.title}</h5>
      <p className="price">{product.price}</p>
      <div className="actions">
        <button disabled={!basketItem} onClick={removeFromBaskets} className="sell">
          Remove
        </button>
        <span> {(basketItem && basketItem.amount) || 0} </span>
        <button disabled={total + product.price > money} onClick={addToBasket} className="buy">
          Add
        </button>
      </div>
    </div>
  );
};

export default Product;
