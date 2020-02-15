import { threeConstants } from '../constants';

const initialState = { boxScale: 1};

export default (state = initialState, action) => {
    switch (action.type) {
        
    case threeConstants.SET_BOX_SCALE:
        return { boxScale: action.scale }

    default:
        return state
    }
}