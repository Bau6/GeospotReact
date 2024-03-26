import React, {useEffect, useState} from "react";
import styles from './users.module.css';
import axios from "axios";
import {responsivePropType} from "react-bootstrap/createUtilityClasses";

const Users = (props) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Получение сохраненного результата с сервера
        axios.get("http://localhost:3003/saved-result")
            .then(response => {
                console.log(response.data); // Вывод данных в консоль
                setUsers(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []); // Пустой массив зависимостей указывает, что эффект зависит только от момента монтирования компонента
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
    //             location:
    //                 {country: 'Россия', city: 'Москва'},
    //             photoUrl: 'https://zakazposterov.ru/fotooboi/z/fotooboi-e-31044-tad-pa-suam-vodopad-yujniy-laos-zakazposterov-ru_z.jpg',
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
        <ul>
            {users.map(user =>
                <div key={user.id} >{user.name}</div>
            )}
        </ul>

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