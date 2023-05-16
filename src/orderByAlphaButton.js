import React from 'react';

// en knapp för att sortera filmer baserat på titel
const OrderByAlphaButton = ({ handleOrderByAlpha }) => {
  return (
    <button className="btn btn-primary me-2" onClick={handleOrderByAlpha}>
      Sortera alfabetiskt
    </button>
  );
};

export default OrderByAlphaButton;