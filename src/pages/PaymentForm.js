import React, { useState } from 'react';

const PaymentForm = ({ selectedRoom, onSubmitPayment }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = () => {
    const paymentData = {
      room: selectedRoom,
      cardNumber,
      expiryDate,
      cvv,
    };

    onSubmitPayment(paymentData);
  };

  return (
    <div>
      <h2>Payment Details:</h2>
      <input
        type="text"
        placeholder="Card Number"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
      />
      <input
        type="text"
        placeholder="Expiry Date"
        value={expiryDate}
        onChange={(e) => setExpiryDate(e.target.value)}
      />
      <input
        type="text"
        placeholder="CVV"
        value={cvv}
        onChange={(e) => setCvv(e.target.value)}
      />
      <button onClick={handleSubmit}>Make Payment</button>
    </div>
  );
};

export default PaymentForm;