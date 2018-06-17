import React from 'react';

// css를 불러올 때만 예외
import "./css/nav.css";

// 데이터를 가져와서, 데이터를 기반으로 HTML을 작성해보자.
// 배열 (array)
// 데이터의 리스트
// let menuDate = ["ORDER", "CARDS", "GIFT", "STORE"];

let menuDatas = [{
  uri: "menu",
  name: "ORDER"
},{
  uri: "cards",
  name: "CARDS"
},{
  uri: "gift",
  name: "GIFT"
},{
  uri: "store-location",
  name: "STORES"
}];

class Nav extends React.Component {
  render() {
    // return 시키기 전에 JSX를 생성하거나, 데이터를 제어하는 등의 작업을 수행
    // 데이터를 받아서 JSX을 만들어보자

    // 배열.map()
    // 배열 아이템을 하나 하나 탐색하면서 반복해서 함수를 실행
    // 함수의 실행결과를 하나로 묶어서 반환

    // Arrow Function
    // 함수인데 축약형
    // function() {}
    // () => {}
    // () =>

    // JSX를 생성하는 과정

    // menuData라는 것은 배열을 돌면서 나온 객체 (아이템)
    // 데이터에 접근할 때는 {}를 사용하여 접근
    // {menuData.uri} or {menuData.name}

    let menuItems = menuDatas.map((menuData) => 
      <li className="menu-item"><a href={menuData.uri}>{menuData.name}</a></li>
    )

    // return 내부가 실제로 렌더링 될 HTML (JSX)를 포함하고 있다.
    return (
      <nav className="nav">
        <ul>
          {menuItems}
        </ul>
      </nav>
    )
  }
}

export default Nav;