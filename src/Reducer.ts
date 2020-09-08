import {Actions, ItemActions, ItemsType} from "./Types";

type History = {
    history: ItemsType[]
    index: number;
}

const history: History = {
    history: [{items: []}],
    index: 0
}

const recordState = (state: ItemsType): void => {
    if (history.index !== history.history.length - 1) {
        history.history = history.history.slice(0, history.index + 1);
    }
    history.history.push(state);
    history.index = history.history.length - 1;
}

export const itemReducer = (
    state: ItemsType,
    action: ItemActions
) => {
    let newState: ItemsType = state;
    switch (action.type) {
        case Actions.Create:
            newState = {
                items: [
                    ...state.items,
                    {
                        id: action.payload.id,
                        value: action.payload.value
                    }
                ]
            };
            recordState(newState);
            break;

        case Actions.Delete:
            newState = {items: [...state.items.filter(product => product.id !== action.payload.id)]};
            recordState(newState);
            break;

        case Actions.Undo:
            if (history.index > 0) {
                history.index--;
                newState = history.history[history.index];
            }
            break;

        case Actions.Redo:
            if (history.index < history.history.length - 1) {
                history.index++;
                newState = history.history[history.index];
            }
            break;
    }
    console.log(`${JSON.stringify(history, undefined, 2)}`);
    return newState;
};

