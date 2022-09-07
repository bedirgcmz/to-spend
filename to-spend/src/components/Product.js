import React from "react";
import "./ProductCard.css";

const Product = ({ product, basket, setBasket, total, money }) => {
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

/*
{
    "id": 9,
    "title": "Çanta",
    "price": 1500000,
    "amount": 1,
    "images": ["", ""] 
  },
  {
    "id": 10,
    "title": "Elmas",
    "price": 157878777,
    "amount": 1,
    "images": ["", ""] 
  },
  {
    "id": 11,
    "title": "Mona Lisa",
    "price": 2000000000,
    "amount": 1,
    "images": ["", ""] 
  },
  {
    "id": 12,
    "title": "Ekmek",
    "price": 0.1,
    "amount": 1,
    "images": ["", ""] 
  }
*/
