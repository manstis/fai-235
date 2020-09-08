import * as React from "react";
import {AppProvider} from "./ContextProvider";
import ItemList from "./ItemList";
import {StateButtons} from "./HistoryProvider";
import "./styles.css";
import {enableAllPlugins} from "immer";

enableAllPlugins();

export default function App() {
    return (
        <AppProvider>
            <StateButtons/>
            <ItemList/>
        </AppProvider>
    );
}
