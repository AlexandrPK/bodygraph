import React from "react";
import { useSelector } from "react-redux";
import { selectNumbers } from "../store/numbers.slice";

const BackLines = ({ fill }) => {
  const gates = useSelector(selectNumbers);
  const activeGates = gates.filter((gate) => gate.selected === 1);

  const lines = [
    { id: 1, name: "line-head-ajna-first " },
    { id: 2, name: "line-head-ajna-second" },
    { id: 3, name: "line-head-ajna-third" },
    { id: 4, name: "line-ajna-throat-first" },
    { id: 5, name: "line-ajna-throat-second" },
    { id: 6, name: "line-ajna-throat-third" },
    { id: 7, name: "line-throat-g-first" },
    { id: 8, name: "line-throat-g-second" },
    { id: 9, name: "line-throat-g-third" },
    { id: 10, name: "line-g-sacral-first" },
    { id: 11, name: "line-g-sacral-second" },
    { id: 12, name: "line-g-sacral-third" },
    { id: 13, name: "line-sacral-root-first" },
    { id: 14, name: "line-sacral-root-second" },
    { id: 15, name: "line-sacral-root-third" },
    { id: 16, name: "line-throat-spleen-left" },
    { id: 17, name: "line-throat-spleen-right" },
    { id: 18, name: "line-throat-solar-right" },
    { id: 19, name: "line-throat-solar-left" },
    { id: 20, name: "line-spleen-heart" },
    { id: 21, name: "line-spleen-sacral" },
    { id: 22, name: "line-sacral-solar" },
    { id: 23, name: "line-heart-solar" },
    { id: 24, name: "line-throat-heart" },
    { id: 25, name: "line-g-heart" },
    { id: 26, name: "line-spleen-root-first" },
    { id: 27, name: "line-spleen-root-second" },
    { id: 28, name: "line-spleen-root-third " },
    { id: 29, name: "line-root-solar-first" },
    { id: 30, name: "line-root-solar-second" },
    { id: 31, name: "line-root-solar-third" },
  ];
  return (
    <div>
      {lines.map((line) => (
        <div key={line.id} className={line.name}></div>
      ))}
      {fill
        ? activeGates.map((gate) => (
            <div
              key={gate.id}
              className={`${lines[gate.idLine - 1]?.name} ${
                gate.linePart === "before" ? "active-before" : "active-after"
              }`}
            ></div>
          ))
        : ""}
    </div>
  );
};

export default BackLines;
