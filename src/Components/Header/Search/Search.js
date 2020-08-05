import React, {Component} from "react";
import s from "./Nav.module.css";

class Nav extends Component {
    render() {
        const {children} = this.props;
        return (
            <div className={s.wrapper}>
                {children}
            </div>
        );
    }
}

export default Nav;