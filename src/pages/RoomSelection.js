import React, { useState } from 'react';

const RoomSelection = ({ onSelectRoom }) => {
  const [selectedRoom, setSelectedRoom] = useState('');

  const handleRoomSelection = (room) => {
    setSelectedRoom(room);
    onSelectRoom(room);
  };

  return (
    <div>
      <h2>Select a Room:</h2>
      <button onClick={() => handleRoomSelection('Standard')}>Standard Room</button>
      <button onClick={() => handleRoomSelection('Deluxe')}>Deluxe Room</button>
      {/* Add more room options */}
    </div>
  );
};

export default RoomSelection;