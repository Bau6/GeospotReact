import React, {useState} from "react";

const ShowPasswordButton = ({getRef}) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
        getRef().current.type = showPassword ? 'password' : 'text';
    };

    return (
        <button onClick={togglePasswordVisibility}>
            {showPassword ? 'Hide Password' : 'Show Password'}
        </button>
    );
};

export default ShowPasswordButton;