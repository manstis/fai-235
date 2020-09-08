import * as React from "react";
import {AppProvider} from "./ContextProvider";
import List from "./List";
import "./styles.css";

export default function App() {
    return (
        <AppProvider>
            <List/>
        </AppProvider>
    );
}
