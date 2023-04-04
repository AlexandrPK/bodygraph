import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../components/style.css";

import { selectNumbers } from "../store/numbers.slice";
import BackLines from "./BackLines";
import Center from "./Center";

const BodyGraph = () => {
  const numbers = useSelector(selectNumbers);
  const [fill, setFill] = useState(false);

  const fillChannels = () => {
    setFill(!fill);
  };

  return (
    <div className="bodygraph">
      <BackLines fill={fill}></BackLines>
      <Center name="head" gates={numbers.slice(0, 3)}></Center>
      <Center name="ajna" gates={numbers.slice(3, 9)}></Center>
      <Center name="throat" gates={numbers.slice(9, 20)}></Center>
      <div className="container">
        <Center name="g" gates={numbers.slice(20, 28)}></Center>
        <Center name="sacral" gates={numbers.slice(28, 37)}></Center>
        <Center name="heart" gates={numbers.slice(37, 41)}></Center>
        <Center name="spleen" gates={numbers.slice(50, 57)}></Center>
        <Center name="solar" gates={numbers.slice(57, 64)}></Center>
      </div>
      <Center name="root" gates={numbers.slice(41, 50)}></Center>
      <button className="button" onClick={fillChannels}>
        {!fill ? "Fill channels" : "Clr channels"}
      </button>
    </div>
  );
};

export default BodyGraph;
