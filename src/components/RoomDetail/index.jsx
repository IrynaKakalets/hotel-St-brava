import './style.css';

export const RoomDetail = ({ type, price, src, description }) => {
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
          <form>
            <div className="form-fields">
              <label htmlFor="field1" className="field-label">
                Od:
              </label>
              <input id="field1" className="field-input" type="date" />
              <label htmlFor="field2" className="field-label">
                Do:
              </label>
              <input id="field2" className="field-input" type="date" />

              <label htmlFor="field2" className="field-label">
                Počet osob:
              </label>
              <input id="field3" className="field-input" type="text" />
              <label htmlFor="select" className="field-label">
                Stravování:
              </label>
              <select id="select" className="field-input">
                <option>Vyberte</option>
                <option>žádné</option>
                <option>snídani</option>
                <option>polopenzi</option>
                <option>plnou penzi</option>
              </select>
              <label htmlFor="check1" className="field-label">
                Domácí mazlíček:{' '}
              </label>
              <input id="check1" className="field-input" type="checkbox" />

              <label htmlFor="check1" className="field-label">
                Přistýlka pro dítě:{' '}
              </label>
              <input id="check1" className="field-input" type="checkbox" />

              <label htmlFor="check1" className="field-label">
                Bezbariérový přístup:{' '}
              </label>
              <input id="check1" className="field-input" type="checkbox" />

              <label htmlFor="field2" className="field-label">
                E-mail:{' '}
              </label>
              <input id="field3" className="field-input" type="email" />

              <label htmlFor="field2" className="field-label">
                Telefon:{' '}
              </label>
              <input id="field3" className="field-input" type="tel" />
            </div>
            <h3>Celková cena za pobyt {} kč</h3>
            <button className="wide">Odeslat poptávku</button>
          </form>
        </div>
      </div>
    </section>
  );
};
