/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { useDispatch } from 'react-redux';
import style from './GameData.css';

export default function GameData({
  title, p1, x, p2, id,
}) {
  const dispatch = useDispatch();

  const userClickHandler = (event, personalId, game, value) => {
    if (event.target.className !== 'quest quest_score disabled') {
      event.target.className = 'quest quest_score disabled';
      dispatch({ type: 'SET_ADD_BAG', payload: { personalId, game, value } });
    }
  };

  return (
    <tbody>
      <tr className="category" style={style}>
        <th className="quest head" style={style}>{title}</th>
        <td
          className="quest quest_score"
          onClick={(event) => userClickHandler(event, id, title, p1)}
          onKeyDown={(event) => userClickHandler(event, id, title, p1)}
        >
          {p1}
        </td>
        <td
          className="quest quest_score"
          onClick={(event) => userClickHandler(event, id, title, x)}
          onKeyDown={(event) => userClickHandler(event, id, title, x)}
        >
          {x}
        </td>
        <td
          className="quest quest_score"
          onClick={(event) => userClickHandler(event, id, title, p2)}
          onKeyDown={(event) => userClickHandler(event, id, title, p2)}
        >
          {p2}

        </td>
      </tr>
    </tbody>
  );
}
