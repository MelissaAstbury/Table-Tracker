import './KitchenPage.scss';
import OrdersList from '../../components/OrdersList/OrdersList';
import OrderContextProvider from '../../context/OrderContext';
import TableContextProvider from '../../context/TableContext';

import React from 'react';

const KitchenPage = () => {
  return (
    <>
      <h1>Kitchen orders</h1>
      <TableContextProvider>
        <OrderContextProvider>
          <OrdersList />
        </OrderContextProvider>
      </TableContextProvider>
    </>
  );
};

export default KitchenPage;
