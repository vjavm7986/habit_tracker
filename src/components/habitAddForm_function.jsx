import React, { memo } from "react";

// function HabitAddForm_function(props){} 와 동일하나 엘리쌤은 rsi(아래)를 더 좋아함
// memo => pureComponent와 동일
const HabitAddForm = memo((props) => {
  // React 에서는 Ref라는 것이 있어서 Input으로 지정해놓은 값을 바로 꺼낼 수 있다.
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    formRef.current.reset();
  };

  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="Please your Habit"
      />
      <button className="add-button">Add</button>
    </form>
  );
});

export default HabitAddForm;
