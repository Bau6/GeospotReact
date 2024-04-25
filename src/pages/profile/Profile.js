// import ProfileCss from "./ProfileCss.module.css"
import RegistrationCss from "../registration/RegistrationCss.module.css";
// import ShowPasswordButton from "../registration/passwordButton";
import React from "react";
import {NavLink} from "react-router-dom";

const Profile = (props) => {
    const labels = ["Почта", "Пароль", "Подтверждение пароля", "Имя", "Фамилия", "Отчество"];
    const outputInfo = () => {
    }
    return (
        <div>
            <div>
                <label className={RegistrationCss.nameLabelInputButtonReg}>
                    {labels[0]}
                </label>
                <label
                    className={RegistrationCss.nameLabelInputButtonReg}
                    onChange={outputInfo}
                >{props.userInf[0] &&
                props.userInf[0].email ?
                    props.userInf[0].email : ''}</label>
                {/*<ShowPasswordButton getRef={() => refs[0]}/>*/}
            </div>
            <NavLink onClick={()=>{}} className={RegistrationCss.nameButtonReg}
                     to="/../../pages/profile/ProfilePage.js">Изменить инфирмацию</NavLink>
        </div>
    )
}

export default Profile;