import Table from "./Table";
import React from "react";

const Basket = ({ basket }) => {
  return (
    <div className="basket">
      <Table basket={basket} />
    </div>
  );
};

export default Basket;
