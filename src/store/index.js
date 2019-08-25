import {createStore,combineReducers,applyMiddleware} from "redux"
import reduxThunk from "redux-thunk"
import yhreducer from "./reducers/yh"

// store分支
const reducer=combineReducers({
    yhreducer
})

const store =createStore(reducer,applyMiddleware(reduxThunk))

export default store