import React, {createContext, Dispatch, useReducer} from "react";
import {itemReducer} from "./Reducers";
import {InitialStateType, ItemActions} from "./Types";

const initialState: InitialStateType = {
    items: []
};

const AppContext = createContext<{
    state: InitialStateType;
    dispatch: Dispatch<ItemActions>;
}>({
    state: initialState,
    dispatch: () => null
});

const mainReducer = (
    {items}: InitialStateType,
    action: ItemActions
) => ({
    items: itemReducer(items, action)
});

const AppProvider: React.FC = ({children}) => {
    const [state, dispatch] = useReducer(mainReducer, initialState);

    return (
        <AppContext.Provider value={{state, dispatch}}>
            {children}
        </AppContext.Provider>
    );
};

export {AppProvider, AppContext};
