import React from 'react';

// En knapp för att sortera filmer baserat på betyg
const OrderByGradeButton = ({ handleOrderByGrade }) => {
  return (
    <button className="btn btn-primary" onClick={handleOrderByGrade}>
      Sortera betyg
    </button>
  );
};

export default OrderByGradeButton;