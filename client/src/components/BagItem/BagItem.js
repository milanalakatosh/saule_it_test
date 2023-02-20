/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
// import { useDispatch } from 'react-redux';
import style from './BagItem.css';

export default function BagItem({
  game, value,
}) {
  // const dispatch = useDispatch();

  // const userClickHandler = (event, game, value) => {
  //   if (event.target.className !== 'quest quest_score disabled') {
  //     event.target.className = 'quest quest_score disabled';
  //     dispatch({ type: 'SET_ADD_BAG', payload: { game, value } });
  //   }
  // };

  return (
    <tbody>
      <tr className="category" style={style}>
        <th className="quest head" style={style}>{game}</th>
        <td
          className="quest quest_score"
          // onClick={(event) => userClickHandler(event, title, p1)}
          // onKeyDown={(event) => userClickHandler(event, title, p1)}
        >
          {value}
        </td>
      </tr>
    </tbody>
  );
}
