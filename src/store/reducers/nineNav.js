import {handleActions} from "redux-actions"


const defaultState = {
    i:0
}

export default handleActions({
    NINE_NAV_INDEX:(state,action)=>{
        let NavIndexState = Object.assign({},state);
        NavIndexState.i = action.payload;
        return NavIndexState;

    }
},defaultState)