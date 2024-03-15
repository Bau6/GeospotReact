const INFO_FOR_REG_USER = 'INFO-FOR-REG-USER';
const EMAIL = 'EMAIL';
const PASSWORD = 'PASSWORD';
const REPASS = 'REPASS';
const NAME_USER = 'NAME-USER';
const SURNAME_USER = 'SURNAME-USER';
const PATRONYMIC_USER = 'PATRONYMIC-USER';
const eventsInfoReducer = (state, action) => {
    switch (action.type) {
        case INFO_FOR_REG_USER:
            state.usersNewInfo.push(action.test1);
            console.log(state.usersNewInfo);
            return state;
        case EMAIL:
            state.userExampleInfo.email = action.newText;
            return state;
        case PASSWORD:
            state.userExampleInfo.password = action.newText;
            return state;
        case REPASS:
            state.userExampleInfo.replayPassword = action.newText;
            return state;
        case NAME_USER:
            state.userExampleInfo.nameUser = action.newText;
            return state;
        case SURNAME_USER:
            state.userExampleInfo.surnameUser = action.newText;
            return state;
        case PATRONYMIC_USER:
            state.userExampleInfo.patronymicUser = action.newText;
            return state;
        default :
            return state;
    }
}
export default eventsInfoReducer;