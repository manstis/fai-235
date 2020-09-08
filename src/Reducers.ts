import {Actions, ItemActions, ItemType} from "./Types";

export const itemReducer = (
    state: ItemType[],
    action: ItemActions
) => {
    switch (action.type) {
        case Actions.Create:
            return [
                ...state,
                {
                    id: action.payload.id,
                    value: action.payload.value
                }
            ];
        case Actions.Delete:
            return [...state.filter(product => product.id !== action.payload.id)];
        case Actions.Undo:
            return state;
        case Actions.Redo:
            return state;
        default:
            return state;
    }
};

