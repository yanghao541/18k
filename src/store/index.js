
import { createStore,combineReducers,applyMiddleware } from "redux"
import reduxThunk from "redux-thunk"
import week from "./reducers/week_choice"
import yhreducer from "./reducers/yh"
import nineNav from "./reducers/nineNav"
import toggle from "./reducers/toggle"
import inputED from "./reducers/inputED"

const reducer = combineReducers({
    week,
    yhreducer,
    nineNav,
    toggle,
    inputED
})

const store = createStore(reducer,applyMiddleware(reduxThunk))

export default store;

