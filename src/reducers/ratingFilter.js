
const ratingFilterRed = (state=1, action) => {
    if(action.type === 'SET_RATING_FILTER') {
        return action.rating
    }
    return state
}

export default ratingFilterRed