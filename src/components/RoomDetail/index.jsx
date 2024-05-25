import { useState } from 'react';
import './style.css';

export const RoomDetail = ({ type, price, src, description, id }) => {
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [numPeople, setNumPeople] = useState(1);
  const [meal, setMeal] = useState('');
  const [pet, setPet] = useState(false);
  const [child, setChild] = useState(false);
  const [accessible, setAccessible] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  let mealPriceDay = 0;
  if (meal === 'breakfast') {
    mealPriceDay = 200;
  } else if (meal === 'halfBoard') {
    mealPriceDay = 300;
  } else if (meal === 'fullBoard') {
    mealPriceDay = 500;
  }

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  const numDays = Math.round(
    (new Date(dateTo).getTime() - new Date(dateFrom).getTime()) /
      MILLISECONDS_PER_DAY,
  );

  const roomPrice = numDays * numPeople * price;
  const mealPrice = numDays * numPeople * mealPriceDay;
  const petPrice = pet ? (roomPrice + mealPrice) * 0.25 : 0;
  const childPrice = child ? (roomPrice + mealPrice) * 0.5 : 0;
  const total = roomPrice + mealPrice + petPrice + childPrice;


  return (
    <section className="light">
      <div className="container">
        <h2>
          Pokoj {type}, {price} kč na osobu za noc
        </h2>
        <div className="columns-2">
          <div className="column">
            <img src={`http://localhost:4000/assets/${src}`} alt="" />
            <p>{description}</p>
          </div>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const response = await fetch('http://localhost:4000/api/orders', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  roomId: id,
                  status: 'new',
                  dateFrom,
                  dateTo,
                  numPeople: Number(numPeople),
                  meal,
                  pet,
                  child,
                  accessible,
                  email,
                  phone,
                }),
              });
              alert(
                response.status === 201
                  ? 'Poptávka byla odeslana'
                  : 'Chyba! Udelejte ještě krat',
              );
            }}
          >
            <div className="form-fields">
              <label htmlFor="field1" className="field-label">
                Od:
              </label>
              <input
                onChange={(e) => setDateFrom(e.target.value)}
                value={dateFrom}
                id="field1"
                className="field-input"
                type="date"
                required
              />
              <label htmlFor="field2" className="field-label">
                Do:
              </label>
              <input
                onChange={(e) => setDateTo(e.target.value)}
                value={dateTo}
                id="field2"
                className="field-input"
                type="date"
                required
              />
              <label htmlFor="field2" className="field-label">
                Počet osob:
              </label>
              <input
                onChange={(e) => setNumPeople(e.target.value)}
                value={numPeople}
                id="field3"
                className="field-input"
                type="number"
                required
              />
              <label htmlFor="select" className="field-label">
                Stravování:
              </label>
              <select
                onChange={(e) => setMeal(e.target.value)}
                value={meal}
                id="select"
                className="field-input"
                required
              >
                <option value="">Vyberte</option>
                <option value="none">žádné</option>
                <option value="breakfast">snídani</option>
                <option value="halfBoard">polopenzi</option>
                <option value="fullBoard">plnou penzi</option>
              </select>
              <label htmlFor="check1" className="field-label">
                Domácí mazlíček:{' '}
              </label>
              <input
                onChange={(e) => setPet(!pet)}
                value={pet}
                id="check1"
                className="field-input"
                type="checkbox"
              />

              <label htmlFor="check1" className="field-label">
                Přistýlka pro dítě:{' '}
              </label>
              <input
                onChange={(e) => setChild(!child)}
                value={child}
                id="check1"
                className="field-input"
                type="checkbox"
              />

              <label htmlFor="check1" className="field-label">
                Bezbariérový přístup:{' '}
              </label>
              <input
                onChange={(e) => setAccessible(!accessible)}
                value={accessible}
                id="check1"
                className="field-input"
                type="checkbox"
              />

              <label htmlFor="field2" className="field-label">
                E-mail:{' '}
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                id="field3"
                className="field-input"
                type="email"
                required
              />

              <label htmlFor="field2" className="field-label">
                Telefon:{' '}
              </label>
              <input
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                id="field3"
                className="field-input"
                type="tel"
                required
              />
            </div>
            <h3>
              {dateFrom === '' || dateTo === ''
                ? 'Choose a date, please'
                : `Celková cena za pobyt ${total} kč`}
            </h3>
            <button className="wide">Odeslat poptávku</button>
          </form>
        </div>
      </div>
    </section>
  );
};
