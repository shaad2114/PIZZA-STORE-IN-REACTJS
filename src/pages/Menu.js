import React from 'react';
import pepperoni0 from "../assets/pizzas.jpg";
import pepperoni1 from "../assets/pizzas.jpg";
import pepperoni2 from "../assets/pizzas.jpg";
import pepperoni3 from "../assets/pizzas.jpg";
import pepperoni4 from "../assets/pizzas.jpg";
import pepperoni5 from "../assets/pizzas.jpg";
import MenuItem from '../components/MenuItem';
import "../styles/Menu.css"

export const MenuList = [
    {
        name: "pepperoni0",
        image: pepperoni0,
        price: 1000,
    },
    {
        name: "pepperoni1",
        image: pepperoni1,
        price: 1001,
    },
    {
        name: "pepperoni2",
        image: pepperoni2,
        price: 1002,
    },
    {
        name: "pepperoni3",
        image: pepperoni3,
        price: 1003,
    },
    {
        name: "pepperoni4",
        image: pepperoni4,
        price: 1004,
    },
    {
        name: "pepperoni5",
        image: pepperoni5,
        price: 1005,
    },
];

function Menu() {
    return (
        <div className="menu">
            <h1 className="menuTitle"> OUR MENU</h1>
            <div className="menuList">
                {
                    MenuList.map((menuItem, key) => {
                        return <MenuItem  key={key} image={menuItem.image} name={menuItem.name} price={menuItem.price}/>;
                    })
                }
            </div>
        </div>
    )
}

export default Menu