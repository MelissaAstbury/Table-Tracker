import './ViewOrders.scss';
import OrdersList from '../../components/OrdersList/OrdersList';
import OrderContextProvider from '../../context/OrderContext';
import TableContextProvider from '../../context/TableContext';
import React from 'react';

function ViewOrders() {
  return (
    <>
      <h1>Active orders</h1>
      <TableContextProvider>
        <OrderContextProvider>
          <OrdersList />
        </OrderContextProvider>
      </TableContextProvider>
    </>
  );
}

export default ViewOrders;
