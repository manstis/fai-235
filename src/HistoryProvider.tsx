import React from "react";
import {AppContext} from "./ContextProvider";
import {Actions, ItemsType} from "./Types";
import {applyPatches, produce} from "immer";
import {WritableDraft} from "immer/dist/types/types-external";

const StateButtons = () => {
    const {dispatch} = React.useContext(AppContext);

    const undo = () => {
        dispatch({
            type: Actions.Undo
        });
    };

    const redo = () => {
        dispatch({
            type: Actions.Redo
        })
    }

    return (
        <div>
            <button onClick={undo}>Undo</button>
            <button onClick={redo}>Redo</button>
        </div>
    );
};

type History = {
    changes: any[],
    reverse: any[],
    index: number
}

const history: History = {
    changes: [],
    reverse: [],
    index: 0
}

const mutate = (state: ItemsType, recipe: (draft: WritableDraft<ItemsType>) => void) => {
    if (history.index < history.changes.length) {
        history.changes = history.changes.slice(0, history.index);
        history.reverse = history.reverse.slice(0, history.index);
    }

    let newState: ItemsType = state;

    newState = produce(
        state,
        recipe,
        (patches, inversePatches) => {
            history.changes.push(...patches)
            history.reverse.push(...inversePatches)
        }
    );
    history.index = history.changes.length;
    return newState;
};

const undo = (state: ItemsType): ItemsType => {
    if (history.index > 0) {
        return applyPatches(state, [history.reverse[--history.index]]);
    }
    return state;
};

const redo = (state: ItemsType): ItemsType => {
    if (history.index < history.changes.length) {
        return applyPatches(state, [history.changes[history.index++]]);
    }
    return state;
};

export {StateButtons, mutate, undo, redo};
