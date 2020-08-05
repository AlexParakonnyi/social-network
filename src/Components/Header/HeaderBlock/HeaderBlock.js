import React, {Component} from "react";
import s from "./HeaderBlock.module.css";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Logo";

class HeaderBlock extends Component {
    render() {
        const {srcLogo = "", children} = this.props;
        return (
            <header className={s.header}>
               <Logo src={srcLogo} className={s.logo}/>
                <Nav className={s.navigation}>
                    <a href="#">Документация</a>
                    <a href="#">Введение</a>
                    <a href="#">Блог</a>
                    <a href="#">Сообщество</a>
                </Nav>
                <input type="text" placeholder="Поиск" className={s.search}/>
            </header>
        )
    }
}

export default HeaderBlock;