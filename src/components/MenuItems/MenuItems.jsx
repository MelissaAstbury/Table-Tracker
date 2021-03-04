import React, { useContext, useEffect, useState } from 'react';
// import io from 'socket.io-client';
import { useHistory } from 'react-router-dom';

import { MenuContext } from '../../context/MenuContext';
import { OrderContext } from '../../context/OrderContext';
import MenuItem from './MenuItem/MenuItem';
import Order from '../Order/Order';
import './MenuItems.scss';
import { TableContext } from '../../context/TableContext';

// const socket = io.connect('http://localhost:9090');

const MenuItems = () => {
  const history = useHistory();
  const { starters, mains, desserts, drinks } = useContext(MenuContext);
  const { sendOrder } = useContext(OrderContext);
  const [tableId, setTableId] = useState('');
  const [order, setOrder] = useState([]);
  const { updateTableStatus } = useContext(TableContext);

  useEffect(() => {
    setTableId(history.location.search.substring(1));
  }, [history]);

  const handleAddRemove = (food, num) => {
    if (num === 1) {
      setOrder([...order, food]);
    } else {
      const newArr = [...order];
      const index = newArr.indexOf(food);
      if (index === -1) return;
      newArr.splice(index, 1);
      setOrder(newArr);
    }
  };

  const submitOrder = () => {
    const finalisedOrder = {
      tableId: tableId,
      order: order,
    };
    // socket.on('order', (order) => {
    //   console.log(order, 'order');
    // });
    sendOrder(finalisedOrder);
    updateTableStatus(tableId, 'waiting-food');
    history.push('/waiter');
  };

  return (
    <>
      <h1>Order for Table {tableId}</h1>
      <div className="courses-container">
        <div className="course">
          <h3 className="title">Starters</h3>
          {starters &&
            starters.map((starter, index) => {
              return (
                <MenuItem
                  key={index}
                  food={starter}
                  handleAddRemove={handleAddRemove}
                  default
                />
              );
            })}
        </div>
        <div className="course">
          <h3 className="title">Mains</h3>
          {mains &&
            mains.map((main, index) => {
              return (
                <MenuItem
                  key={index}
                  food={main}
                  handleAddRemove={handleAddRemove}
                />
              );
            })}
        </div>
      </div>
      <div className="courses-container">
        <div className="course">
          <h3 className="title">Desserts</h3>
          {desserts &&
            desserts.map((dessert, index) => {
              return (
                <MenuItem
                  key={index}
                  food={dessert}
                  handleAddRemove={handleAddRemove}
                />
              );
            })}
        </div>
        <div className="course">
          <h3 className="title">Drinks</h3>
          {drinks &&
            drinks.map((drink, index) => {
              return (
                <MenuItem
                  key={index}
                  food={drink}
                  handleAddRemove={handleAddRemove}
                />
              );
            })}
        </div>
      </div>
      <h3>Order:</h3>
      <Order order={order} />
      {order.length < 1 ? (
        <>
          <p>Add to order before submitting</p>
          <button disabled>Submit Order</button>{' '}
        </>
      ) : (
        <button onClick={submitOrder}>Submit Order</button>
      )}
    </>
  );
};

export default MenuItems;
