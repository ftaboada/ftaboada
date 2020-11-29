import React, { useState } from "react";

import HelloWorld from "./helloWorld";

const Container = () => {
  const [stage, setStage] = useState([true, false, false, false, false]);
  return (
    <div>
      {stage[0] ? <HelloWorld setStage={setStage} stage={stage} /> : <></>}
    </div>
  );
};

export default Container;
