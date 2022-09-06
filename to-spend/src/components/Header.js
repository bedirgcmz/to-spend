import React from "react";

const Header = ({ total, money }) => {
  return (
    <div className="header">
      {total ? (
        <h6>Harcayacak {money - total} $ paraniz kaldi</h6>
      ) : (
        <h6>harcamak icin {money} $ paraniz var</h6>
      )}
    </div>
  );
};

export default Header;
