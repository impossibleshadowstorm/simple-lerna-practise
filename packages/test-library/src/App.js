import { useState } from "react";
import { Heading, Button } from "@impossibleshadowstorm/ui-library";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <Heading text={counter} />
      <Button
        text={"Add"}
        textColor={"white"}
        backgroundColor={"black"}
        handleClick={() => {
          setCounter(counter + 1);
        }}
      />
    </div>
  );
}

export default App;
