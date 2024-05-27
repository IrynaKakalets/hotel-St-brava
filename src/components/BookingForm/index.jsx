import dayjs from 'dayjs';
import { useState } from 'react';
import './style.css';

export const BookingForm = ({ room }) => {
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [peopleCount, setPeopleCount] = useState(2);
  const [meals, setMeals] = useState('half');
  const [pet, setPet] = useState(false);
  const [child, setChild] = useState(false);
  const [handicap, setHandicap] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const nights = dateFrom !== '' && dateTo !== ''
    ? dayjs(dateTo).diff(dayjs(dateFrom), 'day')
    : 0;

  let totalPrice = nights * peopleCount * room.price;
  if (meals === 'breakfast') {
    totalPrice += 150 * peopleCount;
  }

  if (meals === 'half') {
    totalPrice += 300 * peopleCount;
  }

  if (meals === 'full') {
    totalPrice += 500 * peopleCount;
  }

  if (pet) {
    totalPrice += room.price * 0.25;
  }

  if (child) {
    totalPrice += room.price * 0.5;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const bookingItem = {
      dateFrom,
      dateTo,
      peopleCount,
      meals,
      pet,
      child,
      handicap,
      email,
      phone,
      totalPrice,
    };

    const response = await fetch('http://localhost:4001/api/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingItem),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-fields">
        <label htmlFor="date-from" className="field-label">Od:</label>
        <input
          id="date-from"
          className="field-input"
          type="date"
          value={dateFrom}
          onChange={(event) => setDateFrom(event.target.value)}
        />
        
        <label htmlFor="date-to" className="field-label">Do:</label>
        <input 
          id="date-to"
          className="field-input"
          type="date"
          value={dateTo}
          onChange={(event) => setDateTo(event.target.value)} 
        />

        <label htmlFor="people-count" className="field-label">Počet osob:</label>
        <input
          id="people-count"
          className="field-input"
          type="number"
          min="1"
          value={peopleCount}
          onChange={(event) => setPeopleCount(event.target.value)}
        />
        
        <label htmlFor="meals" className="field-label">Stravování:</label>
        <select
          id="meals"
          className="field-input"
          value={meals}
          onChange={(event) => setMeals(event.target.value)}
        >
          <option value="none">Žádné</option>
          <option value="breakfast">Pouze snídaně</option>
          <option value="half">Polopenze</option>
          <option value="full">Plná penze</option>
        </select>

        <label htmlFor="check-pet" className="field-label">Domácí mazlíček:</label>
        <input 
          id="check-pet"
          className="field-input"
          type="checkbox" 
          checked={pet}
          onChange={(event) => setPet(event.target.checked)}
        />

        <label htmlFor="check-child" className="field-label">Přistýlka pro dítě:</label>
        <input 
          id="check-child"
          className="field-input"
          type="checkbox"
          checked={child}
          onChange={(event) => setChild(event.target.checked)}
        />

        <label htmlFor="check-handicap" className="field-label">Bezbariérový přístup:</label>
        <input  
          id="check-handicap"
          className="field-input"
          type="checkbox"
          checked={handicap}
          onChange={(event) => setHandicap(event.target.checked)}
        />

        <label htmlFor="email" className="field-label">E-mail:</label>
        <input
          id="email"
          className="field-input"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <label htmlFor="phone" className="field-label">Telefon:</label>
        <input
          id="phone" 
          className="field-input"
          type="tel"
          value={phone}
          onChange={(event) => setPhone(event.target.value)} 
        />
      </div>
      <div className="price">
        Celková cena za pobyt: {totalPrice} Kč
      </div>
      <button className="wide">Odeslat poptávku</button>
    </form>
  );
};
