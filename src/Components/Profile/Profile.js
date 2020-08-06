import React, {Component} from "react";
import s from "./profile.module.css";
import Personality from "./Personality/Personality";
import Photo from "../../img/photo.jpg";
import MyPosts from "./MyPosts/MyPosts";

const banner = "https://4.bp.blogspot.com/-m5aDF4m6_tA/W_J4ycrsP9I/AAAAAAAAKiI/aW2sp5e0JYA7TNq4QmkEqcUZ2CSe6VcRwCLcBGAs/s1600/Tapiche-Amazon-Jungle-Tour-Peru-Egrets-Creek.jpg";

class Profile extends Component {

    render() {
        return (
            <div className={s.wrap}>
                <img src={banner} alt="" className={s.banner}/>
                <Personality
                    photo={Photo}
                    head={"About:"}
                    name={"Alex"}
                    surname={"Parakonniy"}
                    birth={new Date(1984, 9, 3)}
                    city={"Nikolayiv"}
                    education={"NKI"}
                />
                <MyPosts />
            </div>
        )
    }
}

export default Profile;