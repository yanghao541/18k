import {createAction} from "redux-actions"
import { searchdata } from "@api/yh"

export const goodsTypesAction = createAction("YH",(val)=>val);
//异步的action 处理异步  当数据请求成功后通过dispacth触发同步action
export const goodsTypesAsyncAction = ()=>{
    return async (dispatch)=>{
        let data = await searchdata();
        dispatch(goodsTypesAction(data))
    }
}