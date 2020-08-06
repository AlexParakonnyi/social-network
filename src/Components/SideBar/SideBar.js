import React, {Component} from "react";
import s from "./SideBar.module.css";
import Item from "./Item/Item";

class SideBar extends Component {

    render() {
        return (
            <nav className={s.sideBar}>
                {this.props.items().map(({name, route}, ind) => <Item key={ind} value={name} route={route}/>)}
            </nav>
        )
    }
}

export default SideBar;