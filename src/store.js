import {createStore, combineReducers} from 'redux'
import ratingFilterRed from './reducers/ratingFilter'
import titleFilterRed from './reducers/titleFilter'
import moviesFilterRed from './reducers/moviesFilter'

const store = createStore(combineReducers({
    movies: moviesFilterRed,
    minRatingFilter: ratingFilterRed,
    titleFilter: titleFilterRed
}))

export default store