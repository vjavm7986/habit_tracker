import React, { PureComponent } from "react";

class HabitAddForm2 extends PureComponent {
  // React 에서는 Ref라는 것이 있어서 Input으로 지정해놓은 값을 바로 꺼낼 수 있다.
  formRef = React.createRef();
  inputRef = React.createRef();

  onSubmit = (event) => {
    // 기본적으로 form 내 button이 클릭되면 submit Event가 발생
    // 그리고 submit 이벤트가 발생하면 페이지가 reload 되므로
    // 리로드 하려는 브라우져 기본 기능을 취소해줘야함(event.preventDefault())
    event.preventDefault();

    const name = this.inputRef.current.value;
    name && this.props.onAdd(name); // name이 비어있지 않다면 props의 onAdd 호출
    // this.inputRef.current.value = ""; // 이것도 가능
    this.formRef.current.reset();
  };

  render() {
    return (
      <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          type="text"
          className="add-input"
          placeholder="Please your Habit"
        />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm2;
