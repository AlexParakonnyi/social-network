import React, {Component} from "react";
import s from "./Logo.module.css";

class Logo extends Component {
    render() {
        const {src = ""} = this.props;
        const foo = () => {};
        return (
            <div className={s.wrapper}>
                <a href="#" onClick={foo}>
                    <img src={src} alt="Logo" className={s.logo}/>
                </a>
            </div>
        );
    }
}

export default Logo;