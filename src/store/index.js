import { createStore,combineReducers,applyMiddleware } from "redux"
import reduxThunk from "redux-thunk"
import week from "./reducers/week_choice"
import yhreducer from "./reducers/yh"
const reducer = combineReducers({
    week,
    yhreducer
})

const store = createStore(reducer,applyMiddleware(reduxThunk))

export default store;
