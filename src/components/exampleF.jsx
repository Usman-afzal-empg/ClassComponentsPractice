import React, { Fragment, useState } from "react";

function Counter(props) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  return (
    <Fragment>
      <input type="text" onChange={(event) => setName(event.target.value)} />
      {count > 0 && (
        <span>
          {name} has clicked {count} times
        </span>
      )}

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </Fragment>
  );
}

export default Counter;
