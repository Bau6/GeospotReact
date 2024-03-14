// import ProfileCss from "./ProfileCss.module.css"
import RegistrationCss from "../registration/RegistrationCss.module.css";
import ShowPasswordButton from "../registration/passwordButton";
import React from "react";
const Profile = (props) => {
    const labels = ["Почта", "Пароль", "Подтверждение пароля", "Имя", "Фамилия", "Отчество"];
    const refs = [React.createRef(), React.createRef(), React.createRef(), React.createRef(), React.createRef(), React.createRef(), React.createRef()];
    return (
        <div>
            <div>
                <label className={RegistrationCss.nameLabelInputButtonReg}>
                    {labels[1]}
                </label>
                <input
                    ref={refs[1]}
                       className={RegistrationCss.nameLabelInputButtonReg}
                       value={props.stateFromBD.userExampleInfo.password}>
                       </input>
                <ShowPasswordButton getRef={() => refs[1]}/>
            </div>
        </div>
    )
}

export default Profile;