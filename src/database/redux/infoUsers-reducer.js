const INFO_FOR_REG_USER = 'INFO-FOR-REG-USER';
const EMAIL = 'EMAIL';
const PASSWORD = 'PASSWORD';
const REPASS = 'REPASS';
const NAME_USER = 'NAME-USER';
const SURNAME_USER = 'SURNAME-USER';
const PATRONYMIC_USER = 'PATRONYMIC-USER';
const DATE_BIRTHDAY = 'DATE-BIRTHDAY';
const CITY = 'CITY';
const COUNTRY = 'COUNTRY';
const ADD_DATA = 'ADD_DATA';
const CLEAR_SESSION = 'CLEAR_SESSION';
const AUTH_USER = "AUTH_USER";
let initialState = {
    userExampleInfo: {
        id: null,
        email: "",
        password: "",
        replayPassword: "",
        nameUser: "",
        surnameUser: "",
        patronymicUser: "",
        dateOfBirth: null,
        city: "",
        country: "",
        photoUrl: ''
    },
    usersNewInfo: [],
    data: []
}

const infoUsersReducer = (state = initialState, action) => {
    // debugger
    switch (action.type) {
        case INFO_FOR_REG_USER:
            return {
                ...state,
                usersNewInfo: state.usersNewInfo.concat(action.value),
            };
        case AUTH_USER:
            return {
                ...state,
                userExampleInfo: {
                    ...state.userExampleInfo,
                    email: action.newText.email,
                    nameUser: action.newText.name,
                    surnameUser: action.newText.surname,
                    patronymicUser: action.newText.patronymic,
                    city: action.newText.city,
                    country: action.newText.country,
                    dateOfBirth: action.newText.birthday,
                },
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
        case CITY:
            return {
                ...state,
                userExampleInfo: {
                    ...state.userExampleInfo,
                    city: action.newText
                }
            };
        case COUNTRY:
            return {
                ...state,
                userExampleInfo: {
                    ...state.userExampleInfo,
                    country: action.newText
                }
            };
        case ADD_DATA:
            return {
                ...state,
                data: [...state.data, action.payload]
            };
        case CLEAR_SESSION:
            return {
                ...state,
                userExampleInfo: {
                    id: null,
                    email: "",
                    password: "",
                    replayPassword: "",
                    nameUser: "",
                    surnameUser: "",
                    patronymicUser: "",
                    dateOfBirth: null,
                    city: "",
                    country: "",
                    photoUrl: ''
                },
                usersNewInfo: [],
                data: []
            };
        default:
            return state;
    }
}

export const clearSessionUsersActionCreator = () => ({
    type: CLEAR_SESSION
});
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

export const onCityChangeActionCreator = (value) => (
    {
        type: CITY,
        newText: value
    }
)

export const onCountryChangeActionCreator = (value) => (
    {
        type: COUNTRY,
        newText: value
    }
)
export const authUserInfo = (value) => (
    {
        type: AUTH_USER,
        newText: value
    }
)
export default infoUsersReducer;
