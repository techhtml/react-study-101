import React, { Component } from 'react';

let rewards = [
  {
    image: "https://scontent-icn1-1.xx.fbcdn.net/v/t1.0-9/35330099_1760209874061983_7383392323373105152_n.jpg?_nc_cat=0&oh=300cbf766f10ab88721eb6f64d78ffa9&oe=5BAA8583",
    caption: "Earn free food and drinks"
  },
  {
    image: "https://scontent-icn1-1.xx.fbcdn.net/v/t1.0-9/35330099_1760209874061983_7383392323373105152_n.jpg?_nc_cat=0&oh=300cbf766f10ab88721eb6f64d78ffa9&oe=5BAA8583",
    caption: "Earn free food and drinks"
  },
  {
    image: "https://scontent-icn1-1.xx.fbcdn.net/v/t1.0-9/35330099_1760209874061983_7383392323373105152_n.jpg?_nc_cat=0&oh=300cbf766f10ab88721eb6f64d78ffa9&oe=5BAA8583",
    caption: "Earn free food and drinks"
  }
]
class Cards extends Component {
  render() {
    
  let rewardsCards = rewards.map((reward) => 
    <li>
      <figure>
        <img src={reward.image} />
        <figcaption>{reward.caption}</figcaption>
      </figure>
    </li>
  )

    return (
      <div className="cards">
        <ul>
          {rewardsCards}
        </ul>
      </div>
    )
  }
}

export default Cards