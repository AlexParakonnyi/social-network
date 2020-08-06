import React, {Component} from "react";
import s from "./HeaderBlock.module.css";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Logo";
import NavItem from "../NavItem/NavItem";
import Search from "../Search/Search";

class HeaderBlock extends Component {
    render() {
        const items = ['Документация', 'Введение', 'Блог', 'Сообщество'];
        const {srcLogo = ""} = this.props;
        return (
            <header className={s.header}>
                <Logo src={srcLogo}/>
                <Nav>
                    {
                        items.map((el, index) => {
                            return <NavItem key={index + el} name={el}/>
                        })
                    }
                </Nav>
                <Search />
            </header>
        )
    }
}

export default HeaderBlock;