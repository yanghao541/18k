import {ToggleAction,ToggleAction1} from "@actions/actionCreator"
export const mapStateToProps=(state)=>({
    flag:state.toggle.flag,
    show:state.toggle.show
})

export const mapDispatchToProps=(dispatch)=>({
    handleToggle(){
        dispatch(ToggleAction())
    },
    handleToLingquan(){
        dispatch(ToggleAction1())
    }
})