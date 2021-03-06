import * as actionTypes from '../actionTypes'
let lastId = 0;
//all in lowercase
let initState = {
    location: "",
    staff: "",
    services: "",
    extraService: "",
    dateAndTime: "",
    information: "",
    currentPageState: "location",
    bookingConfirmed: null,
    requestId: '',
}


function reducer(state = initState, action) {
    // console.log('action in rootreducer', action)
    // console.log('state in rootreducer', state)


    switch (action.type) {


        case actionTypes.LOCATION:
            return {
                ...state,
                location: action.payload.location //[...state.location, action.payload.cityName]
            }
        case actionTypes.STAFF:
            return {
                ...state,
                staff: action.payload.staff

            }

        case actionTypes.SERVICES:
            return {
                ...state,
                services: action.payload.services

            }

        case actionTypes.EXTRA_SERVICES:
            return {
                ...state,
                extraService: action.payload.extraService

            }

        case actionTypes.DATE_TIME:
            return {
                ...state,
                dateAndTime: action.payload.dateAndTime

            }

        case actionTypes.INFORMATION:
            return {
                ...state,
                information: action.payload.information
 
            }

        case actionTypes.CONFIRMATION:
            return {
                ...state,
                confirmation: action.payload.confirmation

            }
        case actionTypes.PAGE_STATE:
            return {

                ...state,
                currentPageState: action.payload.currentPageState
            }

        case actionTypes.BOOKING_CONFIRMED:
            return {

                ...state,
                bookingConfirmed: action.payload.bookingConfirmed
            }

        case actionTypes.REQUEST_ID:
            return {

                ...state,
                requestId: action.payload.requestId
            }



        //just for references...will be deleted later on 
        case actionTypes.BUG_ADDED:
            return [
                ...state,
                {
                    id: ++lastId,
                    description: action.payload.description,
                    resolved: false
                }
            ]

        case actionTypes.BUG_REMOVED:
            return state.filter((bug) => bug.id !== action.payload.id)

        case actionTypes.BUG_RESOLVED:
            return state.map(bug => bug.id !== action.payload.id ? bug : { ...bug, resolved: true })


        default:
            return state

    }

}

export default reducer