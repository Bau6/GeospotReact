import React, {useEffect, useState} from "react";
import axios from "axios";
import RegistrationCss from "../registration/RegistrationCss.module.css";

const Users = (props) => {
    const refs = [React.createRef(), React.createRef()];
    const [users, setUsers] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const fetchData = async () => {
        const isValidEmail = validateEmail(inputValue);
        if (!isValidEmail) {
            console.log("Invalid email format");
            return;
        }
        // Проверка на уникальность email в базе данных
        const isEmailUnique = users.every(user => user.email !== inputValue);
        if (!isEmailUnique) {
            console.log("Email already exists in the database");
            return;
        }
        try {
            const response = await axios.get("http://localhost:3003/update-record", {
                params: {
                    nameTable: 'users',
                    params: { id: "27", name: "ivan", surname: "gromov", password: "defoult", email: inputValue}
                }
            });
            console.log(response.data);
            setUsers(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    const fetchAddData = async () => {
        const isValidEmail = validateEmail(inputValue);
        if (!isValidEmail) {
            console.log("Invalid email format");
            return;
        }
        // Проверка на уникальность email в базе данных
        const isEmailUnique = users.every(user => user.email !== inputValue);
        if (!isEmailUnique) {
            console.log("Email already exists in the database");
            return;
        }
        try {
            const response = await axios.post("http://localhost:3003/add-record", {
                nameTable: 'users',
                params: { name: "neya", surname: "gromov", password: "default", email: inputValue }
            });
            console.log(response.data);
            setUsers(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3003/output-table", {
                    params: {
                        nameTable: 'users',
                        params: {} // Параметры, если необходимо
                    }
                });
                console.log(response.data);
                setUsers(response.data);
                setInputValue(response.data[2] && response.data[2].email ? response.data[2].email : "");
                // console.log(users);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return <div>
        <h1>Users LOL</h1>
        <input
            ref={refs[0]}
            className={RegistrationCss.nameLabelInputButtonReg}
            onChange={handleInputChange}
            value={inputValue} // Проверка на наличие и определенность значения users[0].name
        ></input>
        <button onClick={fetchData}>Update Record</button>
        <button onClick={fetchAddData}>Add Record</button>
    </div>
}

export default Users;