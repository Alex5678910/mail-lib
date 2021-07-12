
const visitFilter = {
    ALL: "all",
    COMPLETED: "completed",
    INCOMPLETE: "incomplete"
};

const initialState = visitFilter.ALL;

const visibilityFilter = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_FILTER': {
            return action.payload.terFilter;
        }
        default: {
            return state;
        }
    }
};

export default visibilityFilter;
