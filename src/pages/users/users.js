import React, {useEffect, useState} from "react";
import styles from './users.module.css';
import axios from "axios";
import {responsivePropType} from "react-bootstrap/createUtilityClasses";
import RegistrationCss from "../registration/RegistrationCss.module.css";

const Users = (props) => {
    const refs = [React.createRef(), React.createRef()];
    // const users = [];
    const [users, setUsers] = useState([]);
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get("http://localhost:3003/update-record", {
    //                 params: {
    //                     nameTable: 'users',
    //                     params: { id: "27", name: "ivan", surname: "gromov" }
    //                 }
    //             });
    //             console.log(response.data);
    //             setUsers(response.data);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };
    //
    //     fetchData();
    // }, []);

    let outputInfo = () => {

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
                // console.log(users);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);
    // useEffect(() => {
    //     axios.get("/users")
    //         .then(response => {
    //             console.log(response.data); // Output data to the console
    //             setUsers(response.data);
    //         })
    //         .catch(error => {
    //             console.error(error);
    //         });
    // }, []);
    // useEffect(() => {
    //     // Получение сохраненного результата с сервера
    //     axios.get("http://localhost:3003/users")
    //         .then(response => {
    //             console.log(response.data); // Вывод данных в консоль
    //             setUsers(response.data);
    //         })
    //         .catch(error => {
    //             console.error(error);
    //         });
    // }, []); // Пустой массив зависимостей указывает, что эффект зависит только от момента монтирования компонента



    //
    // axios.get("http://localhost:3000/console-log").then(response => {
    //     debugger
    //     props.setUsers();
    // });

    // if (props.users.length === 0) {
    //     props.setUsers([
    //         {
    //             id: 1,
    //             email: "example@mail.ru",
    //             password: "MyPass1",
    //             replayPassword: "MyPass1",
    //             nameUser: "name1111111111111",
    //             surnameUser: "surName",
    //             patronymicUser: "patronymic",
    //             dateOfBirth: null,
    //             city_id: 2,//{фиксация страны и города!!!!}
    //             photoUrl: 'https://zakazposterov.ru/fotooboi/z/fotooboi-e-31044-tad-pa-suam-vodopad-yujniy-laos-zakazposterov-ru_z.jpg',
    //             sport: [
    //                 {sport_id: 1, qualification_id: 1, event: "Баскетбол", status: 'on'},
    //                 {sport_id: 2, qualification_id: 2, event: "Воллейбол", status: 'on'},
    //                 {sport_id: 3, qualification_id: 3, event: "Хоккей", status: 'on'},
    //                 {sport_id: 4, qualification_id: 4, event: "Футбол", status: "Опытный"}
    //             ]
    //         },
    //         {
    //             id: 1,
    //             email: "example@mail.ru",
    //             password: "MyPass1",
    //             replayPassword: "MyPass1",
    //             nameUser: "name2222222222222",
    //             surnameUser: "surName",
    //             patronymicUser: "patronymic",
    //             dateOfBirth: null,
    //             location: {country: 'Россия', city: 'Москва'},
    //             photoUrl: 'https://gas-kvas.com/uploads/posts/2023-02/1675446642_gas-kvas-com-p-kartinki-na-fonovii-risunok-rabochego-9.jpg',
    //             checkedTypeSport: [
    //                 {event: "Баскетбол", status: 'on'},
    //                 {event: "Воллейбол", status: 'on'},
    //                 {event: "Хоккей", status: 'on'},
    //                 {event: "Футбол", status: "Опытный"}
    //             ]
    //         },
    //         {
    //             id: 1,
    //             email: "example@mail.ru",
    //             password: "MyPass1",
    //             replayPassword: "MyPass1",
    //             nameUser: "name33333333333",
    //             surnameUser: "surName",
    //             patronymicUser: "patronymic",
    //             dateOfBirth: null,
    //             location: {country: 'Россия', city: 'Москва'},
    //             photoUrl: 'https://bonpic.com/wallpapers/original/7189.jpg',
    //             checkedTypeSport: [
    //                 {event: "Баскетбол", status: 'on'},
    //                 {event: "Воллейбол", status: 'on'},
    //                 {event: "Хоккей", status: 'on'},
    //                 {event: "Футбол", status: "Опытный"}
    //             ]
    //         }
    //     ]);
    // }

    return <div>
        <h1>Users LOL</h1>
        <input
            ref={refs[0]}
            className={RegistrationCss.nameLabelInputButtonReg}
            onChange={outputInfo}
            value={users[2] && users[2].name ? users[2].name : ""} // Проверка на наличие и определенность значения users[0].name
        ></input>
        {/*<ul>*/}
        {/*    {users.map(user =>*/}
        {/*        <div key={user.id} >{user.name}</div>*/}
        {/*    )}*/}
        {/*</ul>*/}

        {
            //     props.users.map(u => <div key={u.id}>
            //     <span>
            //     <div>
            //         <img src={u.photoUrl} className={styles.userPhoto}/>
            //     </div>
            //     <div>
            //         <button>mb</button>
            //     </div>
            // </span>
            // <span>
            //     <span>
            //         <div>
            //             {u.nameUser}
            //         </div>
            //         <div>
            //             {u.surnameUser}
            //         </div>
            //     </span>
            //     <span>
            //         <div>{u.location.country}</div>
            //         <div>{u.location.city}</div>
            //     </span>
            // </span>
            //
            //     </div>)
        }
    </div>
}

export default Users;