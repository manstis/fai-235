import React, {createContext, Dispatch, useReducer} from "react";
import {itemReducer} from "./Reducer";
import {ItemActions, ItemsType} from "./Types";

const initialState: ItemsType = {
    items: []
};

const AppContext = createContext<{
    state: ItemsType;
    dispatch: Dispatch<ItemActions>;
}>({
    state: initialState,
    dispatch: () => null
});

const AppProvider: React.FC = ({children}) => {
    const [state, dispatch] = useReducer(itemReducer, initialState);

    return (
        <AppContext.Provider value={{state, dispatch}}>
            {children}
        </AppContext.Provider>
    );
};

export {AppProvider, AppContext};
