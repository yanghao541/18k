
export const mapStateToProps=(state)=>({
    value:state.yhreducer.value
})

export const mapDispatch=(dispatch)=>({
     headval(e){ 
        let value=e.target.value 
       
        let action={
           type:"YH",
           value
       }
       dispatch(action)
    }
})