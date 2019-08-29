import {ToggleAction} from "@actions/actionCreator"
export const mapStateToProps=(state)=>({
    flag:state.toggle.flag
})

export const mapDispatchToProps=(dispatch)=>({
    handleToggle(){
        dispatch(ToggleAction())
    }
})