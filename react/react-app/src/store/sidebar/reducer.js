import * as types from './actionType'
import { statusList } from '../../utils/statusList'

const defaultState = {
    status: statusList.INITTIAL
}

export const sidebar = (state=defaultState, action) => {
    switch (action.type){
        case types.TOOGLE_SIDEBAR_STATUS:
            let status
            if(state.status == statusList.HIDDEN){
                status = statusList.VISIBLE
            }else if(state.status == statusList.VISIBLE){
                status = statusList.HIDDEN
            }else{
                status = statusList.VISIBLE
            }
            return {
                ...state,
                status
            }
        default:
            return state
    }
}
