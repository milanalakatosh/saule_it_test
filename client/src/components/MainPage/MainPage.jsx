import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import style from './MainPage.module.css';
import { useDispatch, useSelector } from 'react-redux'
import { getTeams } from '../../redux/actions/teamsAC';
import { getBetsAndOdds } from '../../redux/actions/betsAndOddsAC';

export default function MainPage() {
  const teams = useSelector((state) => state.teams);
  const getBetsAndOdds = useSelector((state) => state.getBetsAndOdds);

  // const dispatch = useDispatch()
  const navigate = useNavigate();

  useEffect(() => {
    // dispatch({ type: "SET_BAG", payload: 0 });
    dispatch(getTeams());
    dispatch(getBetsAndOdds());
  }, []);

  const showBag = () => navigate('/Bag');

  return (
    <div className={style.page_container}>
      <h1>Sports betting</h1>
      <div className={style.betting_container}>
        <table className={style.field_container} />
      </div>
      <Button
        variant="primary"
        onClick={() => showBag()}
      >
        Betting bag
      </Button>
    </div>
  );
}
