import './style.css';

export const Room = ({ src, title, price, isSelected, onSelect }) => {
  return (
    <div
      onClick={() => onSelect()}
      className={isSelected ? 'card card--selected' : 'card'}
    >
      <img
        className="card__image"
        src={`http://localhost:4000/assets/${src}`}
        alt=""
      />
      <div className="card__title">{title}</div>
      <div className="card__body">{price} kč na osobu</div>
    </div>
  );
};
