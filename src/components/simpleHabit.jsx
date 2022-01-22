// import React, { Component } from "react";

// class SimpleHabit extends Component {
//   state = {
//     count: 0,
//   };

//   handleIncrement = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   render() {
//     return (
//       <li className="habit">
//         <span className="habit-name">Reading</span>
//         <span className="habit-count">{this.state.count}</span>
//         <button
//           className="habit-button habit-increase"
//           onClick={this.handleIncrement}
//         >
//           <i className="fas fa-plus-square"></i>
//         </button>
//       </li>
//     );
//   }
// }

// export default SimpleHabit;

import React, { useEffect, useState, useCallback, useRef } from "react";

// class안의 멤버변수들은 class가 생성될 때 한번만 호출이 되고
// 이후 state가 변동이 될 때는 render() 함수만 호출됨

// 반면 이 함수는 class가 아니라 함수이다 보니 props나 state가 변경이 되면 함수 전체가 호출됨(멤버변수(지역변수)들도 계속해서 호출)
// 대신 ReactHook에서 제공하는 useState를 쓰면 반복적으로 코드블록이 실행되어도 state나 props가 메모리에 저장되기 때문에 초기화 되지 않음

const SimpleHabit = (props) => {
  // state
  const [count, setCount] = useState(0); // React에서 제공하는 useState 함수는 호출될 때마다 state인 count와 이 state를 재세팅하는 setCount함수를 호출

  // const spanRef = React.createRef(); // 이건 반복적으로 만들어짐
  const spanRef = useRef(); // 이건 ReactHook 에서 제공하는 한번만 만들어지게 하는 API

  // const handleIncrement = () => { 이것도 반복해서 만들어지다보니 memo라는 캐시 컴포넌트를 써도 계속해서 호출됨
  // 따라서 아래처럼 useCallback API를 통해 이를 방지
  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  });

  useEffect(() => {
    // useEffect는 컴포넌트가 처음 마운트가 되었을 때 + 변경되었을 때 호출됨
    // 만약 처음만 하고 싶다하면 2번째 파라미터로 [] 빈 배열을 전달, 업데이트 때만 해주고 싶다먼 [count] 넣어주면 됨
    console.log(`mounted & updated!: ${count}`);
  });

  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">
        Reading
      </span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;
