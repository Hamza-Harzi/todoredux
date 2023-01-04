import {
    DELETE_TASK,
    ADD_TASK,
    DONE_TASK,
    UPDATE_TASK,
    DONE_FILTER,
} from "./constante";

export const deleteTask = (id) => {
    return { type: DELETE_TASK, payload: id };
};
export const addTask = (x) => {
    return { type: ADD_TASK, payload: x };
};
export const updateTask = (taskId, text) => {
    return { type: UPDATE_TASK, payload: { taskId, text } };
};
export const doneTask = (id) => {
    return { type: DONE_TASK, payload: id };
};
export const doneFilter = () => {
    return { type: DONE_FILTER };
};