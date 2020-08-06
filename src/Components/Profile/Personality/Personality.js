import React, {Component} from "react";
import s from "./Personality.module.css";

class Personality extends Component {
    render() {
        const {name = "", surname = "", head = "", birth = "", city = "", education = "", photo = ""} = this.props;
        const getLocalDate = (date) => {
            return new Date(date).toLocaleDateString();
        };

        return (
            <div className={s.wrapper}>
                <div className={s.wrapperPhoto}>
                    <img src={photo} alt=""/>
                </div>
                <div className={s.description}>
                    <div className={s.head}>{head}</div>
                    <Info keyInfo={"Name:"} value={name}/>
                    <Info keyInfo={"Surname:"} value={surname}/>
                    <Info keyInfo={"Birthday:"} value={getLocalDate(birth)}/>
                    <Info keyInfo={"City:"} value={city}/>
                    <Info keyInfo={"Education:"} value={education}/>
                </div>
            </div>
        )
    }
}

const Info = (props) => {
    return (
        <div className={s.wrapInfo}>
            <div className={s.keyInfo}>{props.keyInfo}</div>
            <div>{props.value}</div>
        </div>
    )
};

export default Personality;