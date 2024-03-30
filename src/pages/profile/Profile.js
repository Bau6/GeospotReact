// import ProfileCss from "./ProfileCss.module.css"
import RegistrationCss from "../registration/RegistrationCss.module.css";
// import ShowPasswordButton from "../registration/passwordButton";
import React from "react";
import {NavLink} from "react-router-dom";

const Profile = (props) => {
    const labels = ["Почта", "Пароль", "Подтверждение пароля", "Имя", "Фамилия", "Отчество"];
    const refs = [React.createRef(), React.createRef(), React.createRef(), React.createRef(), React.createRef(), React.createRef(), React.createRef()];

    const outputInfo = () => {
        console.log(props.userInf)
    }
    console.log(props.userInf)
    return (
        <div>
            <div>
                <label className={RegistrationCss.nameLabelInputButtonReg}>
                    {labels[0]}
                </label>
                <input
                    ref={refs[0]}
                    className={RegistrationCss.nameLabelInputButtonReg}
                    onChange={outputInfo}
                    value={props.userInf[0] &&
                    props.userInf[0].email ?
                        props.userInf[0].email : ''}
                ></input>
                {/*<ShowPasswordButton getRef={() => refs[0]}/>*/}
            </div>
            <NavLink onClick={()=>{}} className={RegistrationCss.nameButtonReg}
                     to="/../../pages/profile/ProfilePage.js">Сохранить изменения</NavLink>
        </div>
    )
}

export default Profile;