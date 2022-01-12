import {ActionType} from "../action-types"
interface action1{
    type: ActionType.ACTION1
    payload: number
}
interface action2{
    type: ActionType.ACTION2
    payload: number
}
interface action3{
    type: ActionType.ACTION3
}

export type Action = action1 | action2 | action3

