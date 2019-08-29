import {NineNavIndex} from "@actions/actionCreator"

export const mapStateToProps = (state)=>({
    i:state.nineNav.i
})

export const mapDispatchToProps = (dispatch) =>({
    handleGetIndex(index){
        dispatch(NineNavIndex(index))
    }
})

