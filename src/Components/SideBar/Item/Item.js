import React from "react";
import s from "./Item.module.css";
import {NavLink} from "react-router-dom";

const Item = ({route, value}) => (
    <div className={s.item}>
        <NavLink to={route} activeClassName={s.active}>{value}</NavLink>
    </div>
);

export default Item;