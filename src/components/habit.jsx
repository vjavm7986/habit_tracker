import React, { PureComponent } from "react";

class Habit extends PureComponent {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    // state object 안에 있는 count 증가한 뒤 state update
    // 단순히 this.state.count++ 식으로 할 수가 없는게 저렇게 직접 증가 시
    // react는 값이 바뀌었는지 확인이 불가능하기 때문에 render함수 호출을 하지 않음
    // 따라서 react에서 값을 바꿀 땐 setState함수를 무조건 사용
    // this.setState({ count: this.state.count + 1 });

    this.props.onIncrement(this.props.habit);
  };

  handleDecrement = () => {
    // const count = this.state.count - 1;
    // this.setState({ count: count < 0 ? 0 : count });

    this.props.onDecrement(this.props.habit);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };

  render() {
    console.log(this.props);
    const { name, count } = this.props.habit; // 동일한 변수명의 데이터가 자동으로 세팅됨
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button
          className="habit-button habit-delete"
          onClick={this.handleDelete}
        >
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
