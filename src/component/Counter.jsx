import React, { useState } from "react";

function Counter() {
  // ==> useState return Array
  // ==> first is actuaal value , second is function
  // ==> you can whatever write second function name like setCount => update

  const [count, setCount] = useState(0);

  //   let [name, setName] = useState("(click)")

  console.log("Hello", count);

  return (
    <>
      <div className="page-counter">
        <h1 id="h1">Counting App</h1>
        <div className="spacing">
          <p id="p">Count component - {count}</p>
          <h6 id="h6">
            {" "}
            <i class="fa-solid fa-hand-point-right"></i>&nbsp; Number is{" "}
            {count % 2 == 0 ? "Even" : "Odd"}
          </h6>
        </div>

        <div className="click">
          <button className="bttn1" onClick={() => setCount(count + 1)}>
            Increment
          </button>{" "}
          <br />
          <button
            className="bttn2"
            onClick={() => {
              if (count > 0) {
                setCount(count - 1);
              }
            }}>
            Decrement
          </button>
          <br />
          <button className="bttn2" onClick={() => setCount(0)}>
            Reset
          </button>
        </div>
        {/* <button className="bttn" onClick={() => setName(" To Welcom In Code")}>
        Change
      </button> */}
      </div>
    </>
  );
}

export default Counter;
