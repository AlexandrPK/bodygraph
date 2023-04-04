import React from "react";
import { useDispatch } from "react-redux";
import { toggleNumber } from "../store/numbers.slice";

const Center = ({ name, gates }) => {
  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(toggleNumber(id));
  };

  return (
    <div>
      <div className={name}>
        <div className="name">{name}</div>

        {gates.map((number) => (
          <div
            key={number.id}
            className="number"
            id={"num" + number.id}
            style={{
              top: number.top,
              left: number.left,
              backgroundColor: number.color,
            }}
            onClick={() => handleClick(number.id)}
          >
            {number.id}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Center;
