import React, { useState } from "react";

function Todoitem() {
  let [food, setfood] = useState();

  let todo = () => {
    if(food === undefined) {
      alert('Please Select Your Item')
    } else {
      alert(`Your item has been collected`)
    }
  }
  return (
    <>
      <form>
        <div className="divv">
          <input type="radio" name="eat" onChange={(e)=> setfood(e.target.value)} />
          <p>
            Eating
            <div className="space"><span>...</span></div>
          </p>{" "}
          <br />
        </div>
        <div className="divv">
          <input type="radio" name="code" onChange={(e)=> setfood(e.target.value)} />
          <p>
            Coding
             <div className="space2"><span>...</span></div>
          </p>{" "}
          <br />
        </div>
        <div className="divv">
          <input type="radio" name="sleep" onChange={(e)=> setfood(e.target.value)} />
          <p>
            Sleeping  <div className="space3"><span>...</span></div>
          </p>{" "}
          <br />
        </div>
        <div className="divv">
          <input type="radio" name="repeat" onChange={(e)=> setfood(e.target.value)} />
          <p>
            Mobile using  <div className="space4"><span>...</span></div>
          </p>{" "}
          <br />
        </div>
        <button className='btn' onClick={todo}>Add Todo</button>
      </form>
    </>
  );
}

export default Todoitem;
