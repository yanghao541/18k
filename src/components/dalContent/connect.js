import {DetailsMsg} from "@actions/actionCreator"
export const mapStateToProps=(state)=>({
    
})

export const mapDispatchToProps=(dispatch)=>({
    handleDetailMessag(cod){
        dispatch(DetailsMsg(cod))
    }
})