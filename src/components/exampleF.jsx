import React, { Fragment, useEffect, useState } from "react";

function Counter(props) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("This is an alternative for component did mount");
    return () => {
      console.log("This is an alternate for component will unmount");
    };
  }, []);

  useEffect(() => {
    console.log("This is an alternative for component did update");
  }, [count]);

  return (
    <Fragment>
      <h4>functional Component</h4>
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
