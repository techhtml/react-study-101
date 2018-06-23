/*
 * JS하는 사람들끼리의 약속
 * 컴포넌트를 다루는 파일에서는 첫 글자를 대문자로 하자
 */

import React, { Component } from 'react';

class RewardsCard extends Component {
  // 받는 게 어려워
  constructor(props) {
    // constructor
    // 구조체
    // 이 컴포넌트를 만들 때 수행해야하는 일을 constructor에 씀
    super(props);
    // super는 복잡하니까 넘어갈게요.
    // 반드시 해야한다.

    // 얘네 둘은 데이터의 변경에 따른, 데이터를 수신함에 따라서 제어하는 아이들
    // state
    // state는 변경가능, 자기 자신이 쥐고있음.

    // props
    // props는 읽기전용 (read-only), 부모가 주는 값은 props에 들어감

    this.state = {
      src : 'https://app.starbucks.com/weblx/images/rewards-benefits/' + this.props.src
    }
  }

  render() {
    // render 내부에서 내가 보여줄 VIEW를 생성 (JSX -> HTML 유사문법)
    return (
      <div className="card">
        <figure>
          <img src={this.state.src} />
          <figcaption>{this.props.caption}</figcaption>
        </figure>
      </div>
    )
  }
}

export default RewardsCard;