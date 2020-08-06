import React, {Component} from "react";
import s from "./Search.module.css";
import {ReactComponent as Magnifier} from "../../../img/search.svg";

class Search extends Component {
    state = {
        active: false
    };

    /*
    При фокусировке инпута
    */
    handleFocus = () => {
        this.setState({
            active: true
        })
    };

    /*
     Потеря фокусировки инпута
    */
    handleBlur = () => {
        this.setState({
            active: false
        })
    };

    /*
    При клике по лупе фокусируемся на инпуте
    */
    handleMagnify = () => {
        const inp = document.querySelector("#search");
        inp.focus();
    };

    render() {
        const {active} = this.state;
        const wrapClasses = {wrapper: s.wrapper};
        const searchClasses = {search: s.search};
        // const input = document.querySelector("#search");

        if (active) {
            wrapClasses.active = s.active;
            searchClasses.active = s.active;
        } else {
            delete (wrapClasses.active);
            delete (searchClasses.active);
        }

        return (
            <div className={s.container}>
                <div
                    className={Object.values(wrapClasses).join(" ")}
                    onClick={this.handleMagnify}
                >
                    <div
                        className={s.magnifier}
                    >
                        <Magnifier/>
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Поиск"
                            id="search"
                            className={Object.values(searchClasses).join(" ")}
                            onFocus={this.handleFocus}
                            onBlur={this.handleBlur}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;