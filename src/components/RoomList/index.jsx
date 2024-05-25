import { useState } from 'react';
import { Room } from '../Room';
import { useEffect } from 'react';
import './style.css';
import { RoomDetail } from '../RoomDetail';

export const RoomList = () => {
  const [apartments, setApartments] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:4000/api/stribrava');
      const data = await response.json();
      setApartments(data.result);
    })();
  }, []);

  return apartments ? (
    <>
      <section className="dark">
        <div className="container">
          <h2>Naše pokoje</h2>
          <p>Vzberte si, který z našich pokojů je pro vás ten pravý.</p>
          <div className="cards-row">
            {apartments.map((a) => (
              <Room
                key={a.id}
                src={a.src}
                title={a.type}
                price={a.price}
                isSelected={selectedRoom ? a.id === selectedRoom.id : false}
                onSelect={() => setSelectedRoom(a)}
              />
            ))}
          </div>
        </div>
      </section>
      {selectedRoom !== null ? (
        <RoomDetail
          type={selectedRoom.type}
          price={selectedRoom.price}
          src={selectedRoom.src}
          description={selectedRoom.description}
        />
      ) : null}
    </>
  ) : (
    <p>Loading...</p>
  );
};
