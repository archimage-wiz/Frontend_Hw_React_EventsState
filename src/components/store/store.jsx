import "./store.css";
import { useState } from "react";
import { IconSwitch } from "./iconSwitch/iconSwitch.jsx";
import { CardsView } from "./CardsView/CardsView.jsx";
import { ListView } from "./ListView/ListView.jsx";

const products = [
    {
        name: "Nike Metcon 2",
        price: "130",
        color: "red",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg",
    },
    {
        name: "Nike Metcon 2",
        price: "130",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg",
    },
    {
        name: "Nike Metcon 2",
        price: "130",
        color: "blue",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg",
    },
    {
        name: "Nike Metcon 2",
        price: "130",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg",
    },
    {
        name: "Nike free run",
        price: "170",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg",
    },
    {
        name: "Nike Metcon 3",
        price: "150",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg",
    },
];

export function Store() {
    const [viewType, setViewType] = useState("view_list");

    function switchView() {
        setViewType(viewType === "view_module" ? "view_list" : "view_module");
    }

    return (
        <div className="store">
            <IconSwitch icon={viewType} onSwitch={switchView} />
            {viewType === "view_module" ? <CardsView products={products} /> : <ListView products={products} />}
        </div>
    );
}
