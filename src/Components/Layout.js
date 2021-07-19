import "../App.css";
import { useState } from "react";
import Screen from "./Screen";

const Layout = () => {
  const [result, setResult] = useState("");

  const displayHandler = (event) => {
    setResult(result.concat(event.target.value));
  };

  const clearHandler = () => {
    setResult("");
  };

  const backSpaceHandler = () => {
    setResult(result.slice(0, -1));
  };
  
  const evaluteHandler = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("error");
    }
    if (result.length > 16) {
      setResult("Out of bounds");
    }
  };

  return (
    <div>
      {/* <div className="screen">{result}</div> */}
      <Screen result={result} />
      <div className="main">
        <div className="subButton">
          <button onClick={clearHandler} className="AC" id="clear">
            AC
          </button>
          <button onClick={backSpaceHandler} className="B" id="backspace">
            B
          </button>
          <button
            onClick={displayHandler}
            value="%"
            className="operationButton"
          >
            %
          </button>
          <button
            onClick={displayHandler}
            value="/"
            className="operationButton"
          >
            &divide;
          </button>
        </div>
        <div className="subButton">
          <button onClick={displayHandler} value="7">
            7
          </button>
          <button onClick={displayHandler} value="8">
            8
          </button>
          <button onClick={displayHandler} value="9">
            9
          </button>
          <button
            onClick={displayHandler}
            className="operationButton"
            value="*"
          >
            x
          </button>
        </div>
        <div className="subButton">
          <button onClick={displayHandler} value="4">
            4
          </button>
          <button onClick={displayHandler} value="5">
            5
          </button>
          <button onClick={displayHandler} value="6">
            6
          </button>
          <button
            onClick={displayHandler}
            className="operationButton"
            value="-"
          >
            -
          </button>
        </div>
        <div className="subButton">
          <button onClick={displayHandler} value="1">
            1
          </button>
          <button onClick={displayHandler} value="2">
            2
          </button>
          <button onClick={displayHandler} value="3">
            3
          </button>
          <button
            onClick={displayHandler}
            className="operationButton"
            value="+"
          >
            +
          </button>
        </div>
        <div className="classes.subButton">
          <button onClick={displayHandler} className="zero" value="0">
            0
          </button>
          <button onClick={displayHandler} value=".">
            .
          </button>
          <button onClick={evaluteHandler} className="equalButton" id="result">
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Layout;
