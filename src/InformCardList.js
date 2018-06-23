import React, { Component } from 'react';
import InformCard from './InformCard';

class InformCardList extends Component {
  render() {
    return (
      <div className="information-card-list">
        <InformCard />
        <InformCard />
      </div>
    )
  }
}

export default InformCardList;