import React, { Component } from 'react';
import MenuItem from './MenuItem';

const menus = {
  drinks: [
    {
      name: "Hot Coffees",
      href: "/drinks/hot-coffees",
      thumb: "https://globalassets.starbucks.com/assets/0f1fb4ec32324da88d7135470269a9f1.jpg"
    },
    {
      name: "Hot Teas",
      href: "/drinks/hot-coffees",
      thumb: "https://globalassets.starbucks.com/assets/0f1fb4ec32324da88d7135470269a9f1.jpg"
    },
    {
      name: "Hot Drinks",
      href: "/drinks/hot-coffees",
      thumb: "https://globalassets.starbucks.com/assets/0f1fb4ec32324da88d7135470269a9f1.jpg"
    },
    {
      name: "Frappuccino® Blended Beverages",
      href: "/drinks/hot-coffees",
      thumb: "https://globalassets.starbucks.com/assets/0f1fb4ec32324da88d7135470269a9f1.jpg"
    }
  ]
}

class MenuContainer extends Component {
  render() {

    // MenuContainer가 props로 데이터를 받아서,
    // MenuContainer 자체가 반복

    const MenuList = menus.drinks.map((menu) => {
      return (
        <MenuItem menuInfo={menu} />
      )
    })

    return (
      <section className="menu-container">
        <h1>Drinks</h1>
        <div className="menu-list">
          {MenuList}
        </div>
      </section>
    )
  }
}

export default MenuContainer;