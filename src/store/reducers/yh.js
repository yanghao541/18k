import {handleActions} from "redux-actions"

const yhState={
   value:"",

}
export default handleActions({
    YH:(state,action)=>{
        let search = Object.assign({},state);
        search.value = action.value;
        return search;
    }
},yhState)





