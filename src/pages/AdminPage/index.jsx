import { useEffect, useState } from 'react';
import './style.css';
import { OrderRow } from '../../components/OrderRow';

export const AdminPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:4000/api/orders');
      const data = await response.json();
      setOrders(data.result);
    })();
  }, []);

  return (
    <table>
      <caption>Hotel Střibrava. Poptávky.</caption>
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Status</th>
          <th>Room ID</th>
          <th>Date from</th>
          <th>Date to</th>
          <th>Number of people</th>
          <th>Meal</th>
          <th>Pet</th>
          <th>Child</th>
          <th>Accessible</th>
          <th>E-mail</th>
          <th>Phone</th>
        </tr>
        {orders.map((o) => (
          <OrderRow key={o.id} order={o} />
        ))}
      </thead>
      <tbody></tbody>
    </table>
  );
};
