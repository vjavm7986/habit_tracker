import React, { Component } from "react";
import "./app.css";
import Habits from "./components/habits";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Learning", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    // 아래 3줄은 pureComponent로 했을 경우 오브젝트 자체가 업데이트가 안되기 때문에 Rendering이 호출되지 않음 따라서 이걸 수정하면!
    // console.log(`handleIncrement ${habit.name}`);
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // habits[index].count++;
    // 이렇게 변경
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 }; // 동일한 obj를 하나 만드는데 count는 count+1로 덮어쓸꺼다
      }
      return item;
    });

    //this.setState({ habits: habits });
    // Key와 Value가 동일한 변수명이면 하나로 합쳐도 됨
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    // console.log(`handleDecrement ${habit.name}`);
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // const count = habits[index].count - 1;
    // habits[index].count = count < 0 ? 0 : count;
    // console.log(count);
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    });

    //this.setState({ habits: habits });
    // Key와 Value가 동일한 변수명이면 하나로 합쳐도 됨
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    console.log(`handleDelete ${habit}`);
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };

  handleAdd = (name) => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    this.setState({ habits });
  };

  handleReset = () => {
    const habits = this.state.habits.map((habit) => {
      // habit.count = 0;
      // return habit;
      if (habit.count !== 0) {
        // 이미 0인 애들은 굳이 새로운 obj 만들 필요가 없으니깐
        return { ...habit, count: 0 };
      }
      return habit;
    });
    this.setState({ habits });
  };

  render() {
    return (
      <>
        <Navbar
          totalCount={this.state.habits.filter((item) => item.count > 0).length}
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );

    // <React.Fragment> 태그는 여러 태그들을 하나로 묶어줄 빈 태그로 사용
    // jsx는 한 가지 태그로 감싸줘야하는데 여러 태그를 써야할 때!
    // <React.Fragment> => <> 로 보통 많이 씀
    /*   const name = "Jeff";
  return (
    <React.Fragment>
      <h1>Hello</h1>
      {name && <h1>Hello! {name}:)</h1>}
      {["abc", "def"].map((i) => (
        <h1>{i}</h1>
      ))}
    </React.Fragment> 
    );*/

    /*     
    <>
      <h1>Hello</h1>
      {name && <h1>Hello! {name}:)</h1>}
      {['abc','def'].map(i => (
        <h1>{i}</h1>
      ))}
    </> 
    */
  }
}

export default App;
