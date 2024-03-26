let initialState = {
    participantsFromBD: [
        {id: 1, name: 'Иванов Иван', age: 25},
        {id: 2, name: 'Петров Петр', age: 30},
        {id: 3, name: 'Сидоров Сидор', age: 28}
    ]
}

const usersReducer = (state = initialState, action) => {
    return state;
}

export default usersReducer;