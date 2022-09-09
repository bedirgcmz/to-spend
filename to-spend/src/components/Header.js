import React from "react";

const Header = ({ total, money }) => {
  return (
    <div className="header">
      {total ? (
        <h6>You have ${money - total} left to spend</h6>
      ) : (
        <h6> You have ${money} to spend</h6>
      )}
    </div>
  );
};

export default Header;
