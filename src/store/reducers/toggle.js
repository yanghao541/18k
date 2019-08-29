import {handleActions} from "redux-actions"


const defaultState = {
    flag:false
}

export default handleActions({
    TOGGLE_ACTION:(state,action)=>{
        let ToggleState = Object.assign({},state)
        ToggleState.flag=!state.flag
        return ToggleState;
    }
},defaultState)