/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './GameData.css';

export default function GameData({
  title, p1, x, p2, id,
}) {
  const dispatch = useDispatch();
  const loadingModal = useSelector((state) => state.loadingModal);

  const userClickHandler = (event, personalId, game, value) => {
    dispatch({ type: 'SET_CHANGE_SHOW', payload: !loadingModal });
    if (event.target.className !== 'quest quest_score disabled') {
      event.target.className = 'quest quest_score disabled';
      dispatch({ type: 'SET_ADD_BAG', payload: { personalId, game, value } });
    }
  };

  return (
    <tbody>
      <tr className="team" style={style}>
        <th className="quest head" style={style}>{title}</th>
        <td
          className="odd odd_value"
          onClick={(event) => userClickHandler(event, id, title, p1)}
          onKeyDown={(event) => userClickHandler(event, id, title, p1)}
        >
          {p1}
        </td>
        <td
          className="odd odd_value"
          onClick={(event) => userClickHandler(event, id, title, x)}
          onKeyDown={(event) => userClickHandler(event, id, title, x)}
        >
          {x}
        </td>
        <td
          className="odd odd_value"
          onClick={(event) => userClickHandler(event, id, title, p2)}
          onKeyDown={(event) => userClickHandler(event, id, title, p2)}
        >
          {p2}

        </td>
      </tr>
    </tbody>
  );
}
