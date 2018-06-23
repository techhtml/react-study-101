import React, { Component } from 'react';
import RewardsCard from './RewardsCard';

class RewardsCardList extends Component {
  render() {
    // Card의 데이터를 변경해야함.
    // 1. 데이터셋을 만든다 (정석, 지금 바로 할 필요 X)
    // 2. 자식 컴포넌트에 이미지 src와 어떤 텍스트가 들어갈 지 보내면
    return (
      <div className="rewards-card-list">
        <RewardsCard src="rewards-card-1.jpg" caption="Earn free food and drinks" />
        <RewardsCard src="rewards-card-2.jpg" caption="Enjoy a birthday treat" />
        <RewardsCard src="rewards-card-3.jpg" caption="Free refill for brewed coffee and tea" />
      </div>
    )
  }
}

export default RewardsCardList