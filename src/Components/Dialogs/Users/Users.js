import React from "react";
import s from "./Users.module.css";
import {NavLink} from "react-router-dom";

const Users = ({users}) => {

    return (
        <div>
            {
                users().map((el, ind) => (
                    <NavLink activeClassName={s.active} className={s.link} key={ind} to={"/dialogs/" + (ind + 1)}>{el}</NavLink>
                ))
            }
        </div>
    )
};

export default Users;