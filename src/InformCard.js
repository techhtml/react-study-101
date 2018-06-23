import React, { Component } from 'react';

class InformCard extends Component {
  // dl, dt, dd
  // definition list
  // 사전적 의미 
  // <dt>치킨
  // <dd>1. 닭을 튀긴것
  // <dd>2. 맛있어
  // name : value
  // <dt>조은
  // <dd>배고프다

  render() {
    return (
      <div className="information-card">
        <a href="#">
          <figure>
            <img src="/weblx/images/feed/guest-add-card.jpg" />
            <figcaption>
              <dl>
                <dt>Order on the way</dt>
                <dd>Order ahead and pick up your order at the counter when you arrive.</dd>
              </dl>
              <span class="button">Order now</span>
            </figcaption>
          </figure>
        </a>
      </div>
    )
  }
}

export default InformCard;