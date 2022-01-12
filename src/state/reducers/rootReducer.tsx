
import {Action} from "../actions"
import {ActionType} from "../action-types"

const initialState = "ss"

const rootReducer = (state: string = initialState, action: Action) => {

switch(action.type){
    case "action1" :
        return state
    default:
        return state
}
}
export default rootReducer