import React, { useState } from 'react';
import './App.css';
import RoomSelection from './RoomSelection';
import PaymentForm from './PaymentForm';
import Confirmation from './Confirmation';

const App = () => {
  const [selectedRoom, setSelectedRoom] = useState('');
  const [paymentData, setPaymentData] = useState(null);

  const handleRoomSelection = (room) => {
    setSelectedRoom(room);
  };

  const handleSubmitPayment = (data) => {
    setPaymentData(data);
  };

  return (
    <div className="App">
      <h1>Room Booking and Payment</h1>
      {!selectedRoom && <RoomSelection onSelectRoom={handleRoomSelection} />}
      {selectedRoom && !paymentData && (
        <PaymentForm selectedRoom={selectedRoom} onSubmitPayment={handleSubmitPayment} />
      )}
      {paymentData && <Confirmation paymentData={paymentData} />}
    </div>
  );
};

export default App;