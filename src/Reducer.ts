import {Actions, ItemActions, ItemsType} from "./Types";
import {mutate, redo, undo} from "./HistoryProvider";

export const itemReducer = (
    state: ItemsType,
    action: ItemActions
) => {
    switch (action.type) {
        case Actions.Create:
            return mutate(state,
                (draft) => {
                    draft.items.push({
                        id: action.payload.id,
                        value: action.payload.value
                    });
                });

        case Actions.Delete:
            return mutate(state,
                (draft) => {
                    draft.items = draft.items.filter(product => product.id !== action.payload.id);
                });

        case Actions.Undo:
            return undo(state);

        case Actions.Redo:
            return redo(state);
    }
    return state;
};

