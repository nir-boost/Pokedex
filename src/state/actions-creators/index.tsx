import {Dispatch} from "redux"
import { ActionType } from "../action-types"
import { Action } from "../actions"


const action1 =(amouunt: number) =>{
    return (dispatch: Dispatch<Action>) =>{
        dispatch({
            type: ActionType.ACTION1,
            payload: amouunt
        })
    }
}