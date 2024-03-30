const INFO_FOR_REG_USER = 'INFO-FOR-REG-USER';
const EMAIL = 'EMAIL';
const PASSWORD = 'PASSWORD';
const REPASS = 'REPASS';
const NAME_USER = 'NAME-USER';
const SURNAME_USER = 'SURNAME-USER';
const PATRONYMIC_USER = 'PATRONYMIC-USER';
const DATE_BIRTHDAY = 'DATE-BIRTHDAY';


let initialState = {

    userExampleInfo: {
        id: 1,
        email: "",
        password: "",
        replayPassword: "",
        nameUser: "",
        surnameUser: "",
        patronymicUser: "",
        dateOfBirth: null,
        city: "",
        photoUrl: ''
        // checkedTypeSport: [
        //     {event: "Баскетбол", status: 'on'},
        //     {event: "Воллейбол", status: 'on'},
        //     {event: "Хоккей", status: 'on'},
        //     {event: "Футбол", status: "Опытный"}
        // ]
    },
    usersNewInfo: []
}

const infoUsersReducer = (state = initialState, action) => {
    // debugger
    switch (action.type) {
        case INFO_FOR_REG_USER:
            return {
                ...state,
                usersNewInfo: state.usersNewInfo.concat(action.value),
            };
        case EMAIL:
            return {
                ...state,
                userExampleInfo: {
                    ...state.userExampleInfo,
                    email: action.newText
                }
            };
        case PASSWORD:
            return {
                ...state,
                userExampleInfo: {
                    ...state.userExampleInfo,
                    password: action.newText
                }
            };
        case REPASS:
            return {
                ...state,
                userExampleInfo: {
                    ...state.userExampleInfo,
                    replayPassword: action.newText
                }
            };
        case NAME_USER:
            return {
                ...state,
                userExampleInfo: {
                    ...state.userExampleInfo,
                    nameUser: action.newText
                }
            };
        case SURNAME_USER:
            return {
                ...state,
                userExampleInfo: {
                    ...state.userExampleInfo,
                    surnameUser: action.newText
                }
            };
        case PATRONYMIC_USER:
            return {
                ...state,
                userExampleInfo: {
                    ...state.userExampleInfo,
                    patronymicUser: action.newText
                }
            };
        case DATE_BIRTHDAY:
            return {
                ...state,
                userExampleInfo: {
                    ...state.userExampleInfo,
                    dateOfBirth: action.newText
                }
            };
        default:
            return state;
    }
}



export const changeRegDataActionCreator = (value) => (
    {
        type: INFO_FOR_REG_USER,
        value: value
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

export const onDateChangeActionCreator = (value) => (
    {
        type: DATE_BIRTHDAY,
        newText: value
    }
)

export default infoUsersReducer;