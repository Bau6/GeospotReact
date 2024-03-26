// import eventsInfoReducer from "../redux/infoUsers-reducer";
// let store = {
//     _state: {
//         eventsInfo: {
//             eventStatsFromBD: [
//                 {id: 1, event: 'Спортивное мероприятие по футболу'},
//                 {id: 2, event: '25 июля 2022'},
//                 {id: 3, event: 'Стадион "Арена"'}
//             ],
//             sportNameFromBD: [
//                 {id: 1, name: 'Баскетбол'},
//                 {id: 2, name: 'Воллейбол'},
//                 {id: 3, name: 'Хоккей'},
//                 {id: 4, name: 'Футбол'}
//             ]
//         },
//         users: {
//             participantsFromBD: [
//                 {id: 1, name: 'Иванов Иван', age: 25},
//                 {id: 2, name: 'Петров Петр', age: 30},
//                 {id: 3, name: 'Сидоров Сидор', age: 28}
//             ]
//         },
//         infoUsers: {
//             userExampleInfo: {
//                 id: 1,
//                 email: "example@mail.ru",
//                 password: "MyPass1",
//                 replayPassword: "MyPass1",
//                 nameUser: "name",
//                 surnameUser: "surName",
//                 patronymicUser: "patronymic",
//                 dateOfBirth: "",
//                 checkedTypeSport: [
//                     {event: "Баскетбол", status: 'on'},
//                     {event: "Воллейбол", status: 'on'},
//                     {event: "Хоккей", status: 'on'},
//                     {event: "Футбол", status: "Опытный"}
//                 ]
//             },
//             usersNewInfo: [],
//         }
//     },
//     getState() {
//         return this._state;
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },
//     _callSubscriber() {
//         console.log("1");
//     },
//     dispatch(action) { // { type: "ADD-POST" }
//         this._state.infoUsers = eventsInfoReducer(this._state.infoUsers, action);
//         this._callSubscriber(this._state);
//     }
// }
//
// export default store;
// window.store = store;





// switch (action.type) {
//     case INFO_FOR_REG_USER:
//         return {
//             ...state,
//             usersNewInfo: [...state.usersNewInfo, action.test1]
//         };
//     case EMAIL:
//         return {
//             ...state,
//             userExampleInfo: {
//                 ...state.userExampleInfo,
//                 email: action.newText
//             }
//         };
//     case PASSWORD:
//         return {
//             ...state,
//             userExampleInfo: {
//                 ...state.userExampleInfo,
//                 password: action.newText
//             }
//         };
//     case REPASS:
//         return {
//             ...state,
//             userExampleInfo: {
//                 ...state.userExampleInfo,
//                 replayPassword: action.newText
//             }
//         };
//     case NAME_USER:
//         return {
//             ...state,
//             userExampleInfo: {
//                 ...state.userExampleInfo,
//                 nameUser: action.newText
//             }
//         };
//     case SURNAME_USER:
//         return {
//             ...state,
//             userExampleInfo: {
//                 ...state.userExampleInfo,
//                 surnameUser: action.newText
//             }
//         };
//     case PATRONYMIC_USER:
//         return {
//             ...state,
//             userExampleInfo: {
//                 ...state.userExampleInfo,
//                 patronymicUser: action.newText
//             }
//         };
//     default:
//         return state;
//
// }


// switch (action.type) {
//     case INFO_FOR_REG_USER:
//         state.usersNewInfo.push(action.test1);
//         console.log(state.usersNewInfo);
//         return state;
//     case EMAIL:
//         state.userExampleInfo.email = action.newText;
//         return state;
//     case PASSWORD:
//         state.userExampleInfo.password = action.newText;
//         return state;
//     case REPASS:
//         state.userExampleInfo.replayPassword = action.newText;
//         return state;
//     case NAME_USER:
//         state.userExampleInfo.nameUser = action.newText;
//         return state;
//     case SURNAME_USER:
//         state.userExampleInfo.surnameUser = action.newText;
//         return state;
//     case PATRONYMIC_USER:
//         state.userExampleInfo.patronymicUser = action.newText;
//         return state;
//     default :
//         return state;
// }