import React, { useContext } from 'react';
import './OrdersList.scss';

import { OrderContext } from '../../context/OrderContext';
import { TableContext } from '../../context/TableContext';

function OrdersList() {
  const { orders } = useContext(OrderContext);
  const { updateTableStatus } = useContext(TableContext);

  const handleServe = tableId => {
    updateTableStatus(tableId, 'served');
  };

  return (
    <>
      <ul className="orders_list">
        {orders.map((order, index) => {
          const timeRegex = /T(\d{2}:\d{2})/;
          return (
            <li key={index} className="order_card">
              <h2>Table: {order.table_id}</h2>
              <p className="order_item">Notes: {order.description}</p>
              <div className="food_list">
                <h3>Order:</h3>
                {order.food_items &&
                  order.food_items.map((item, index) => {
                    return (
                      <div className="order_item" key={index}>
                        <p>Food: {item.name}</p>
                        <p>Course: {item.course}</p>
                      </div>
                    );
                  })}
              </div>
              {window.location.pathname === '/kitchen' && (
                <button onClick={() => handleServe(order.table_id)}>
                  Ready to serve
                </button>
              )}
              <h3 className="order_time">
                Order time: {order.created_at.match(timeRegex)[1]}
              </h3>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default OrdersList;
