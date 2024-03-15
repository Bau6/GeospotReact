import eventsInfoReducer from "../redux/infoUsers-reducer";
const INFO_FOR_REG_USER = 'INFO-FOR-REG-USER';
const EMAIL = 'EMAIL';
const PASSWORD = 'PASSWORD';
const REPASS = 'REPASS';
const NAME_USER = 'NAME-USER';
const SURNAME_USER = 'SURNAME-USER';
const PATRONYMIC_USER = 'PATRONYMIC-USER';
let store = {
    _state: {
        eventsInfo: {
            eventStatsFromBD: [
                {id: 1, event: 'Спортивное мероприятие по футболу'},
                {id: 2, event: '25 июля 2022'},
                {id: 3, event: 'Стадион "Арена"'}
            ],
            sportNameFromBD: [
                {id: 1, name: 'Баскетбол'},
                {id: 2, name: 'Воллейбол'},
                {id: 3, name: 'Хоккей'},
                {id: 4, name: 'Футбол'}
            ]
        },
        users: {
            participantsFromBD: [
                {id: 1, name: 'Иванов Иван', age: 25},
                {id: 2, name: 'Петров Петр', age: 30},
                {id: 3, name: 'Сидоров Сидор', age: 28}
            ]
        },
        infoUsers: {
            userExampleInfo: {
                id: 1,
                email: "example@mail.ru",
                password: "MyPass1",
                replayPassword: "MyPass1",
                nameUser: "name",
                surnameUser: "surName",
                patronymicUser: "patronymic",
                dateOfBirth: "",
                checkedTypeSport: [
                    {event: "Баскетбол", status: 'on'},
                    {event: "Воллейбол", status: 'on'},
                    {event: "Хоккей", status: 'on'},
                    {event: "Футбол", status: "Опытный"}
                ]
            },
            usersNewInfo: [],
        }
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    _callSubscriber() {
        console.log("1");
    },
    dispatch(action) { // { type: "ADD-POST" }
        this._state.infoUsers = eventsInfoReducer(this._state.infoUsers, action);
        this._callSubscriber(this._state);
    }
}

export const changeRegDataActionCreator = (value) => (
    {
        type: INFO_FOR_REG_USER,
        test1: value
    }
)
export const onEmailChangeActionCreator = (value) => (
    {
        type: EMAIL,
        newText: value
    }
)
export const onPassChangeActionCreator = (value) => (
    {
        type: PASSWORD,
        newText: value
    }
)
export const onRepassChangeActionCreator = (value) => (
    {
        type: REPASS,
        newText: value
    }
)
export const onNameChangeActionCreator = (value) => (
    {
        type: NAME_USER,
        newText: value
    }
)
export const onSurnameChangeActionCreator = (value) => (
    {
        type: SURNAME_USER,
        newText: value
    }
)
export const onPatronymicChangeActionCreator = (value) => (
    {
        type: PATRONYMIC_USER,
        newText: value
    }
)

export default store;
window.store = store;