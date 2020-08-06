import React from "react";
import s from "./Dialogs.module.css";
import Users from "./Users/Users";
import Messages from "./Messages/Messages";
import {BrowserRouter as Router, Route} from "react-router-dom";

const users = () => [
    "Alex", "Julia", "Diana", "Polina", "Tatyana", "Nikolay"
];

const Dialogs = () => (
    <Router>
        <div className={s.wrapper}>
            <Users users={users}/>
            {users().map((el, ind) => <Route key={ind} path={"/dialogs/" + (ind + 1)} component={Messages}/>)}
        </div>
    </Router>
);

export default Dialogs;