import React, {
  Fragment,
  useEffect,
  useState,
  useCallback,
  useRef,
} from "react";
import ExampleChild from "./exampleChild";

function Counter(props) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const inputRef = useRef();
  useEffect(() => {
    console.log("This is an alternative for component did mount");
    return () => {
      console.log("This is an alternate for component will unmount");
    };
  }, []);

  useEffect(() => {
    console.log("This is an alternative for component did update");
  }, [count]);

  const setInputName = useCallback((event) => {
    setName(event.target.value);
  }, []);

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  });

  const handleDecrement = useCallback(() => {
    setCount(count + 1);
  });

  return (
    <Fragment>
      <h4>functional Component</h4>
      <ExampleChild setName={setInputName} ref={inputRef} />
      {count > 0 && (
        <span>
          {name} has clicked {count} times
        </span>
      )}

      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={() => inputRef.current.focus()}>Focus Parent</button>
    </Fragment>
  );
}

export default Counter;
