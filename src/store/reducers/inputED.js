import { handleActions } from "redux-actions"

const defaultState = {
    inputPhone: "手机号码",
    inputMsg: "验证码",
    inputPassWord: "密码",
    p:"请输入6位数字，请重新输入",
    list:[],
   obj:{}
}

export default handleActions({
    INPUT_ACTION: (state, action) => {
        switch (action.payload.status) {
            case 1:
                let InputState = Object.assign({}, state);
                //在这做正则
                InputState.inputPhone = action.payload.val;
                if((/^1[3579]\d{9}$/).test(InputState.inputPhone)){
                    InputState.obj.inputPhone=InputState.inputPhone;
                }else{
                    alert("请确认无误后，重新输入")
                    InputState.inputPhone=""
                }
                return InputState;
            case 2:
                let InputState1 = Object.assign({}, state);
                InputState1.inputMsg = action.payload.val;
                if((/^\d{0,6}$/).test(InputState1.inputMsg)){
                    InputState1.obj.inputMsg=InputState1.inputMsg;
                }else{
                    alert(state.p)
                    InputState1.inputMsg=""
                }
                
                return InputState1;
            case 3:
                let InputState2 = Object.assign({}, state);
                InputState2.inputPassWord = action.payload.val;
                if((/^(\w){6,20}$/).test(InputState2.inputPassWord)){
                    InputState2.obj.inputPassWord=InputState2.inputPassWord;
                }else{
                    alert("输入错误，请重新输入")
                    InputState2.inputPassWord=""
                }
               
                return InputState2;
        }
    },
    BTN_ACTION: (state, action) => {
        let InputAdd =Object.assign({},state);
        InputAdd.list.push(state.obj)
        sessionStorage.setItem("list",JSON.stringify(InputAdd.list))
        return InputAdd
    }

}, defaultState)