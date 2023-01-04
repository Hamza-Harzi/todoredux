import {
    DELETE_TASK,
    ADD_TASK,
    DONE_TASK,
    UPDATE_TASK,
    DONE_FILTER,
} from "./constante";
const initState = [
    { id: 1, text: "go to the match", done: false },
    { id: 2, text: "go to the moon", done: false },
];
export const Reducer = (state = initState, action) => {
    switch (action.type) {
        case DELETE_TASK:
            let taskAfterDelete = state.filter((item) => item.id !== action.payload);
            return taskAfterDelete;

        case ADD_TASK:
            let taskToAdd = [...state, action.payload];
            return taskToAdd;

        case UPDATE_TASK:
            let taskToUpdate = state.map((item) => {
                if (item.id === action.payload.taskId) {
                    return {...item, text: action.payload.text };
                } else {
                    return item;
                }
            });
            return taskToUpdate;

        case DONE_TASK:
            let taskDone = state.map((item) => {
                if (item.id === action.payload) {
                    if (item.done === true) {
                        return {...item, done: false };
                    } else {
                        return {...item, done: true };
                    }
                } else {
                    return item;
                }
            });
            return taskDone;

        case DONE_FILTER:
            let getDone = state.filter((item) => item.done === true);
            return getDone;
        default:
            return state;
    }
};

export default Reducer;