import {createStore,combineReducers,applyMiddleware} from "redux"
import reduxThunk from "redux-thunk";
import nineNav from "./reducers/nineNav"
import toggle from "./reducers/toggle"
import inputED from "./reducers/inputED"


const reducer = combineReducers({
    nineNav,
    toggle,
    inputED
})

const store =createStore(reducer,applyMiddleware(reduxThunk))

export default store;