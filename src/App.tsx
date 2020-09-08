import * as React from "react";
import {AppProvider} from "./ContextProvider";
import ItemList from "./ItemList";
import HistoryButtons from "./HistoryButtons";
import "./styles.css";

export default function App() {
    return (
        <AppProvider>
            <HistoryButtons/>
            <ItemList/>
        </AppProvider>
    );
}
