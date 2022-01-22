import React, { Component } from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";

class Habits extends Component {
  handleIncrement = (habit) => {
    this.props.onIncrement(habit);
  };

  handleDecrement = (habit) => {
    this.props.onDecrement(habit);
  };

  handleDelete = (habit) => {
    this.props.onDelete(habit);
  };

  handleAdd = (name) => {
    this.props.onAdd(name);
  };

  render() {
    return (
      <>
        <HabitAddForm onAdd={this.handleAdd} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
              // onDelete = {(habit) => {this.props.handleDelete(habit)}}
              // : 이렇게 쓰면 렌더링 될 때마다 계속 메모리에 함수가 올라감
              // : 그래도 상대적으로 크게 차지 않해서 쓸 수 있으나 React Hook 쪽에서
              // : 절대 쓰면 안되는 경우가 있으니깐 그냥 불편해도 이렇게 쓰기!!!!
            />
          ))}
        </ul>
        <button className="habits-reset" onClick={this.props.onReset}>
          Reset All
        </button>
      </>
    );
  }
}

export default Habits;
