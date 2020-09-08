import React from "react";
import {AppContext} from "./ContextProvider";
import {Actions} from "./Types";

const HistoryButtons = () => {
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

export default HistoryButtons;
