import React, {Component} from "react";
import s from "./NavItem.module.css";

class NavItem extends Component {
    state = {
        active: false
    };

    render() {
        const {name = ""} = this.props;
        return (
            <div>
                <a href="#" className={s.item}>{name}</a>
            </div>
        )
    }
}

export default NavItem;