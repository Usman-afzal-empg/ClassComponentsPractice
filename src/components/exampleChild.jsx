import React, {
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";

const ExampleChild = forwardRef((props, ref) => {
  const inputRef = useRef();
  useEffect(() => {
    console.log("Set Input function has changed");
  }, [props.setName]);

  function focus() {
    inputRef.current.focus();
  }

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
  }));

  return (
    <div>
      <input ref={inputRef} type="text" onChange={props.setName} />
      <button onClick={focus}>Focus</button>
    </div>
  );
});

export default ExampleChild;
