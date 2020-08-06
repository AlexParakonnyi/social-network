import React, {Component} from "react";
import s from "./MyPosts.module.css";
import Post from "../Post/Post";
import ava from "../../../img/photo.jpg";

class MyPosts extends Component {
    render() {
        return (
            <div>
                <div className={s.wrapper}>
                    <div className={s.head}>My posts</div>
                    <button className={s.but}> new post</button>
                </div>
                <Post
                    ava={ava}
                    date={new Date(2017, 1, 5)}
                    message={"Hi how are you?"}
                />
                <Post
                    ava={ava}
                    date={new Date(2018, 8, 20)}
                    message={"It is hot weather today. Isn't it?"}
                />
            </div>
        );
    }
}

export default MyPosts;