import React, {Component} from "react";
import s from "./Logo.module.css";

class Logo extends Component {
    render() {
        const {src = ""} = this.props;
        return (
            <div className={s.wrapper}>
                <a href="#">
                    <img src={src} alt="Logo" className={s.logo}/>
                </a>
            </div>
        );
    }
}

export default Logo;