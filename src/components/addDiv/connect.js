import {ShowDownAction} from "@actions/actionCreator"
export const mapStateToProps=(state)=>({
    flag:state.toggle.flag,
    show:state.toggle.show
})

export const mapDispatchToProps=(dispatch)=>({
    handleShowDown(){
        dispatch(ShowDownAction())
    }
})