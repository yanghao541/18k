import {createAction} from "redux-actions"

export const NineNavIndex = createAction("NINE_NAV_INDEX",(val)=>val)

export const DetailsMsg = createAction("DETAILS_MSG",(val)=>val)

export const ToggleAction = createAction("TOGGLE_ACTION")

export const ToggleAction1 = createAction("TOGGLE_ACTION1")

export const InputAction = createAction("INPUT_ACTION",(val,status)=>({
    val,status
}))

export const BtnAction = createAction("BTN_ACTION")

export const ShowDownAction = createAction("SHOW_DOWN_ACTION")
