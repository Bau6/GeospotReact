let store = {
    _state: {
        eventStatsFromBD: [
            { id: 1, event: 'Спортивное мероприятие по футболу' },
            { id: 2, event: '25 июля 2022' },
            { id: 3, event: 'Стадион "Арена"' }
        ],
        participantsFromBD: [
            { id: 1, name: 'Иванов Иван', age: 25 },
            { id: 2, name: 'Петров Петр', age: 30 },
            { id: 3, name: 'Сидоров Сидор', age: 28 }
        ],
        userExampleInfo: { id: 1,
            email: "example@mail.ru",
            password: "MyPass1",
            replayPassword: "MyPass1",
            nameUser: "name",
            surnameUser: "surName",
            patronymicUser: "patronymic",
            dateOfBirth: 10/10/2000,
            checkedTypeSport: [
                {event: "Баскетбол", status: 'on'},
                {event: "Воллейбол", status: 'on'},
                {event: "Хоккей", status: 'on'},
                {event: "Футбол", status: "Опытный"}
            ]},
        usersNewInfo: [],
        sportNameFromBD: [
            { id: 1, name: 'Баскетбол'},
            { id: 2, name: 'Воллейбол'},
            { id: 3, name: 'Хоккей'},
            { id: 4, name: 'Футбол'}
        ]
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

    // infoForRegUser(regData) {
    //     this._state.usersNewInfo.push(regData);
    //     console.log(this._state.usersNewInfo);
    // },
    //
    // addPost() {
    //     this._callSubscriber(this._state);
    // },
    //
    // updateNewEmailText(newText) {
    //     this._state.userExampleInfo.email = newText;
    //     this._callSubscriber(this._state);
    // },
    //
    // updateNewPassText(newText) {
    //     this._state.userExampleInfo.password = newText;
    //     this._callSubscriber(this._state);
    // },
    //
    // updateNewRepassText(newText) {
    //     this._state.userExampleInfo.replayPassword = newText;
    //     this._callSubscriber(this._state);
    // },
    //
    // updateNewNameText(newText) {
    //     this._state.userExampleInfo.nameUser = newText;
    //     this._callSubscriber(this._state);
    // },
    //
    // updateNewSurnameText(newText) {
    //     this._state.userExampleInfo.surnameUser = newText;
    //     this._callSubscriber(this._state);
    // },
    //
    // updateNewPatronymicText(newText) {
    //     this._state.userExampleInfo.patronymicUser = newText;
    //     this._callSubscriber(this._state);
    // },

    dispatch(action) { // { type: "ADD-POST" }
        if (action.type === 'INFO-FOR-REG-USER') {
            this._state.usersNewInfo.push(action.test1);
            console.log(this._state.usersNewInfo);
        } else if (action.type === 'EMAIL') {
            this._state.userExampleInfo.email = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'PASSWORD') {
            this._state.userExampleInfo.password = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'REPASS') {
            this._state.userExampleInfo.replayPassword = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'NAME-USER') {
            this._state.userExampleInfo.nameUser = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'SURNAME-USER') {
            this._state.userExampleInfo.surnameUser = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'PATRONYMIC-USER') {
            this._state.userExampleInfo.patronymicUser = action.newText;
            this._callSubscriber(this._state);
        }
    }
}
export default store;
window.store = store;