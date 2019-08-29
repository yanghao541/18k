import {handleActions} from "redux-actions"


const defaultState = {
    flag:false,
    show:false
}

export default handleActions({
    TOGGLE_ACTION:(state,action)=>{
        let ToggleState = Object.assign({},state)
        ToggleState.flag=!state.flag
        return ToggleState;
    },
    TOGGLE_ACTION1:(state,action)=>{
        let ToggleState1 = Object.assign({},state)
        ToggleState1.show=!state.show
        return ToggleState1;
    },
    SHOW_DOWN_ACTION:(state,action)=>{
        let ShowDownState =Object.assign({},state)
        ShowDownState.show=false;
        return ShowDownState;
    }
},defaultState)