import React, {useState} from "react";

const ShowPasswordButton = ({ getRef }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(prevShowPassword => !prevShowPassword);
        getRef().current.type = !showPassword ? 'text' : 'password';
    };

    return (
        <button onClick={togglePasswordVisibility}>
            {showPassword ? 'Hide Password' : 'Show Password'}
        </button>
    );
};
export default ShowPasswordButton;