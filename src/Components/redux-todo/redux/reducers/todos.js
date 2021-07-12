const initialState = {
    allIds: [],
    byIds: {},
    val: ''
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    switch (action.type) {
        case 'ADD_TODO': {
            const {id, content} = action.payload;
            return {...state, allIds: [...state.allIds, id], byIds: {...state.byIds, [id]: {content, completed: false}}
            }
        }
        case 'TOGGLE_TODO': {
            const {id} = action.payload;
            return {...state, byIds: {...state.byIds, [id]: {...state.byIds[id], completed: !state.byIds[id].completed}}
            }
        }
        case 'DEL_ITEM': {
            const {id} = action.payload;
            const newArray = [...state.allIds.filter((i) => i !== id)];
            return {...state, allIds: newArray}
        }
        case 'DEL_ITEM_TWO': {
            const {id} = action.payload;
            const newArray = [...state.allIds.filter((i) => i !== id)];
            return {...state, allIds: newArray}
        }
        case 'H_CHANGE': {
            const {e} = action.payload;
            return {...state, val: e.target.value}
            }
        default:
            return state
    }
}