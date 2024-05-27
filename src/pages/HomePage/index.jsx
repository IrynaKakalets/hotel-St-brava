import { useState, useEffect } from 'react';
import { Banner } from '../../components/Banner';
import { RoomsList } from '../../components/RoomsList';
import { RoomInfo } from '../../components/RoomInfo';
import { BookingForm } from '../../components/BookingForm';
import { Footer } from '../../components/Footer';

export const HomePage = () => {
  const [rooms, setRooms] = useState(null);
  const [selectedRoomId, setSelectedRoomId] = useState(2);

  useEffect(() => {
    const fetchRooms = async () => {
      const response = await fetch('http://localhost:4001/api/rooms');
      const data = await response.json();
      setRooms(data.result);
    };

    fetchRooms();
  }, []);

  const room = rooms !== null ? rooms[selectedRoomId] : null;
  
  return (
    <>
      <Banner />
      <RoomsList 
        rooms={rooms}
        selectedId={selectedRoomId}
        onSelect={setSelectedRoomId}
      />

      <section className="light">
        <div className="container">
          { rooms === null
              ? <p>Načítání...</p>
              : <>
                  <h2>Pokoj {room.name}, {room.price} Kč na osobu za noc</h2>
                    <div className="columns-2">
                    { rooms !== null && <RoomInfo room={room} /> } 
                    <BookingForm room={room} />
                  </div>    
                </>
          }
        </div>
      </section>

      <Footer />
    </>
  );
};
