import React from 'react';
import './App.css';
import HeaderBlock from "./Components/Header/HeaderBlock/HeaderBlock";
import SideBar from "./Components/SideBar/SideBar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Customizations from "./Components/Customizations/Customizations";

const srcLogo = "https://d2k1ftgv7pobq7.cloudfront.net/meta/u/res/images/brand-assets/Logos/0099ec3754bf473d2bbf317204ab6fea/trello-logo-blue.png";

const App = () => {

    const items = () => {
        return [
            {
                name: "Профиль",
                route: "/profile",
                component: Profile
            },
            {
                name: "Сообщения",
                route: "/dialogs",
                component: Dialogs
            },
            {
                name: "Новости",
                route: "/news",
                component: News
            },
            {
                name: "Музыка",
                route: "/music",
                component: Music
            },
            {
                name: "Настройки",
                route: "/customizations",
                component: Customizations
            }
        ];
    };

    return (
        <BrowserRouter>
            <div className="appWrapper">
                <div className="header">
                    <HeaderBlock srcLogo={srcLogo}/>
                </div>
                <div className="nav">
                    <SideBar items={items}/>
                </div>
                <div className="content">
                    {items().map( ({ route, component }, ind) => (
                        <Route key={ind} path={route} component={component}/>
                    ))}
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
