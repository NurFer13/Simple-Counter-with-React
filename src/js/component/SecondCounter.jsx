import React from "react";
import "../../styles/secondCounterStyles.css";
import { useState, useEffect, useMemo } from "react";

const SecondCounter = () => {
  const [one, setOne] = useState(0);
  const [two, setTwo] = useState(0);
  const [three, setThree] = useState(0);
  const [four, setFour] = useState(0);
  const [five, setFive] = useState(0);
  const [six, setSix] = useState(0);
  const [onOff, setOnOff] = useState(false);

  const Timer = () => {
    setOne(one + 1);
  };

  useEffect(() => {
    let intervalId;
    if (onOff) {
      intervalId = setInterval(Timer, 1000);
    }
    return () => clearInterval(intervalId);
  }, [one, onOff]);

  if (one === 10) {
    setOne(0);
    setTwo(two + 1);
  }
  if (two === 10) {
    setTwo(0);
    setThree(three + 1);
  }
  if (three === 10) {
    setThree(0);
    setFour(four + 1);
  }
  if (four === 10) {
    setFour(0);
    setFive(five + 1);
  }
  if (five === 10) {
    setFive(0);
    setSix(six + 1);
  }
  const restartBtn = () => {
    setOne(0);
    setTwo(0);
    setThree(0);
    setFour(0);
    setFive(0);
    setSix(0);
    setOnOff(false);
  };
  const startStopBtn = () => {
    setOnOff(!onOff);
  };
  return (
    <>
      <div className="container">
        <div className="clock  text-light">
          <div className="card">
            <div className="clock-icon">
              <i className="far fa-clock"></i>
            </div>
          </div>
          <div className="card">
            <div className="number">{six}</div>
          </div>
          <div className="card">
            <div className="number">{five}</div>
          </div>
          <div className="card">
            <div className="number">{four}</div>
          </div>
          <div className="card">
            <div className="number">{three}</div>
          </div>
          <div className="card">
            <div className="number">{two}</div>
          </div>
          <div className="card">
            <div className="number">{one}</div>
          </div>
        </div>
      </div>
      <div className="button">
        <button className="btn btn-danger " onClick={restartBtn}>
          Restart
        </button>
      </div>
      <div className="button">
        <button className="btn btn-success " onClick={startStopBtn}>
          Start / Stop
        </button>
      </div>
    </>
  );
};

export default SecondCounter;
