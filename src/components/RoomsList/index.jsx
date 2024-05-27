export const RoomsList = ({ rooms, selectedId, onSelect }) => {  
  return (
    <section className="dark">
      <div className="container">
        <h2>Naše pokoje</h2>
        { 
          rooms === null
            ? <p>Načítání...</p>
            : <>
              <p>Vyberte si, který z našich pokojů je pro vás ten pravý.</p>
              <div className="cards-row">
                {rooms.map((room) => (
                  <div 
                    key={room.id}
                    className={`card ${selectedId === room.id ? 'card--selected' : ''}`}
                    onClick={() => onSelect(room.id)}
                  >
                    <img className="card__image" src={room.image} />
                    <div className="card__title">{room.name}</div>
                    <div className="card__body">{room.price} kč na osobu</div>
                  </div>
                ))}
              </div>
            </>
        }
      </div>
    </section>
  );
};
