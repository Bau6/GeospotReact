let initialState = {

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

}
const eventsInfoReducer = (state = initialState, action) => {
    return state;
}

export default eventsInfoReducer;