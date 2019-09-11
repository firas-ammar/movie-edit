
const titleFilterRed = (state="", action) => {
    if(action.type === 'SET_TITLE_FILTER') {
        return action.title
    }
    return state
}

export default titleFilterRed
