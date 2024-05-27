export const RoomInfo = ({ room }) => {
  return (
    <div className="column">
      <img src={room.image} />
      <p>{room.description}</p>
    </div>
  );
};
