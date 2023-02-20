import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import style from './MainPage.module.css';
import GameData from '../GameData/GameData';

export default function MainPage() {
  const navigate = useNavigate();
  const [TeamsAndOdds] = useState([
    {
      id: 0,
      title: 'Philadelphia Eagles & Indianapolis Colts',
      p1: 5.60,
      x: 3.80,
      p2: 1.68,
    },
    {
      id: 1,
      title: 'Detroit Lions & Nashville Stars',
      p1: 5.75,
      x: 3.94,
      p2: 1.70,
    },
    {
      id: 2,
      title: 'Houston Texans & TN Bulls',
      p1: 5.90,
      x: 3.80,
      p2: 1.80,
    },
  ]);

  useEffect(() => {
  }, []);
  const showBagHandler = () => navigate('/bag');

  return (
    <div className={style.page_container}>
      <h1>Sports betting</h1>
      <div className={style.betting_container}>
        <table className={style.field_container}>
          <thead>
            <tr>
              <th className={style.header}>Teams</th>
              <th className={style.header}>П1</th>
              <th className={style.header}>X</th>
              <th className={style.header}>П2</th>
            </tr>
          </thead>
          {TeamsAndOdds ? TeamsAndOdds.map((team) => (
            <GameData
              title={team.title}
              p1={team.p1}
              x={team.x}
              p2={team.p2}
              id={team.id}
              key={team.id}
            />
          )) : '404'}
        </table>
      </div>
      <Button
        className={style.btn}
        variant="primary"
        onClick={() => showBagHandler()}
      >
        Go to bag
      </Button>
    </div>
  );
}
