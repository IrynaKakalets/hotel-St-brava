import './style.css';

export const OrderRow = ({ order }) => {
  const changeStatus = async (status) => {
    await fetch(`http://localhost:4001/api/orders/${order.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify([
        {
          op: 'replace',
          path: '/status',
          value: status,
        },
      ]),
    });
    window.location.reload();
  };

  return (
    <tr>
      <td>{order.id}</td>
      <td
        className={
          'status ' +
          (order.status === 'confirmed' ? 'status__confirmed ' : '') +
          (order.status === 'rejected' ? 'status__rejected ' : '')
        }
      >
        {order.status}
        {order.status === 'new' ? (
          <div className="status-buttons">
            <button
              onClick={() => changeStatus('confirmed')}
              className="confirm-button"
            >
              Confirm
            </button>
            <button
              onClick={() => changeStatus('rejected')}
              className="reject-button"
            >
              Reject
            </button>
          </div>
        ) : null}
      </td>
      <td>{order.roomId}</td>
      <td>{order.dateFrom}</td>
      <td>{order.dateTo}</td>
      <td>{order.numPeople}</td>
      <td>
        {order.meal === 'breakfast' ? 'snídani' : ''}
        {order.meal === 'halfBoard' ? 'polopenzi' : ''}
        {order.meal === 'fullBoard' ? 'plnou penzi' : ''}
        {order.meal === 'none' ? 'žádné' : ''}
      </td>
      <td>{order.pet === false ? '-' : '+'}</td>
      <td>{order.child === false ? '-' : '+'}</td>
      <td>{order.accessible === false ? '-' : '+'}</td>
      <td>{order.email}</td>
      <td>{order.phone}</td>
    </tr>
  );
};
