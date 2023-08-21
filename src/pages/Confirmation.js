import React from 'react';

const Confirmation = ({ paymentData }) => {
  return (
    <div>
      <h2>Booking Confirmation:</h2>
      <p>Room: {paymentData.room}</p>
      <p>Card Number: {paymentData.cardNumber}</p>
      <p>Expiry Date: {paymentData.expiryDate}</p>
      {/* Display more payment details */}
      <p>Thank you for booking!</p>
    </div>
  );
};

export default Confirmation;