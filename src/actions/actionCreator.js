import {createAction} from "redux-actions"

export const NineNavIndex = createAction("NINE_NAV_INDEX",(val)=>val)

export const DetailsMsg = createAction("DETAILS_MSG",(val)=>val)

export const ToggleAction = createAction("TOGGLE_ACTION")


export const InputAction = createAction("INPUT_ACTION",(val,status)=>({
    val,status
}))

export const BtnAction = createAction("BTN_ACTION")
