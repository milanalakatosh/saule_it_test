import React from 'react';
// import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import style from './BagCart.module.css';
import BagItem from '../BagItem/BagItem';

export default function BagCart() {
  const bag = useSelector((state) => state.bag);

  return (
    <div className={style.page_container}>
      <h1>Your betting bag</h1>
      <div className={style.betting_container}>
        <table className={style.field_container}>
          <thead>
            <tr>
              <th className={style.header}>Teams</th>
              <th className={style.header}>Your bet</th>
            </tr>
          </thead>
          {bag ? bag.map((el) => (
            <BagItem
              game={el.game}
              value={el.value}
              id={el.personalId}
              key={el.personalId}
            />
          )) : '404'}
        </table>
      </div>
      {/* <Button
        className={style.btn}
        variant="primary"
      >
        Go to bag
      </Button> */}
    </div>
  );
}
