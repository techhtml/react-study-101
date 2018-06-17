// React는 자바스크립트를 이용해서 VIEW를 그리기 위한 도구 (라이브러리)

// import
// 외부 라이브러리나 외부 자바스크립트 파일을 이 파일에 불러올 때 사용
// HTML : <script src="react.js"></script>
// JS : import React from 'react';
// 장점 : 한 파일 내에서 여러개의 파일을 불러와서 사용할 수 있음
// 파일 분리가 용이해짐

// React를 불러옴
// 핵심은 React입니다.
import React from 'react';

// ReactDOM을 불러옴 (저런 게 있구나...)
import ReactDOM from 'react-dom';

// 자기가 직접 작성한 JS
// (./) 현재경로
// (./폴더명) 현재경로의 다른 폴더
// (../) 한폴더 위
// (../폴더명) 한폴더 위의 다른 폴더
import Header from './Header';
import Cards from './Cards';
import JoinButton from './JoinButton';

// css
import "./css/common.css";

// class 문
// 객체를 만드는 것
// 객체 (Object)
// 객체는 여러개의 데이터를 가지고 있는 집합
// let ChoEun = { name: "조은", birthday: "1993-12-25", age: 26 }
// ChoEun.name -> 조은
// ChoEun.birthday -> 1993-12-25
// ChoEun.age -> 26

// extends
// 특정한 객체를 상속받아서 새로운 객체를 만들 때 사용
// A라는 객체가 모든 객체에서 가져야하는 형질을 가지고 있을 때,
// 모든 객체가 A라는 객체를 상속받는다.

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="contents">
          <Cards />
        </div>
      </div>
      // 정확히는 JSX라고 부르는 특수 문법
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));