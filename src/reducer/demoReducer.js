
const initState = {value : ''};

export default function demoReducer(state = initState, action) {
    if(action.type === 'demo') {
        return {
            ...state,
            value : 'nhu cai cc'
        };
    }
    return state;

}