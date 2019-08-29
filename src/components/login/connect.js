import {InputAction,BtnAction} from "@actions/actionCreator"

export const mapStateToProps =(state)=> ({
    inputPhone:state.inputED.inputPhone,
    inputMsg:state.inputED.inputMsg,
    inputPassWord:state.inputED.inputPassWord
})

export const mapDispatchToProps = (dispatch)=> ({
    handleOnchange(status,e){
        let value =e.target.value
        dispatch(InputAction(value,status))
    },
    handleClick(){
        dispatch(BtnAction())
    }   
})