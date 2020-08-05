import React, {Component} from "react";
import s from "./Post.module.css";

class Post extends Component{
    render() {
        const {ava="", message="", date=""} = this.props;
        return(
            <div className={s.wrapper}>
                <div className={s.head}>
                    <img className={s.ava} src={ava} alt=""/>
                    <div className={s.date}>{new Date(date).toLocaleDateString()}</div>
                </div>
                <div className={s.message}>{message}</div>
            </div>
        );
    }
}

export default Post;