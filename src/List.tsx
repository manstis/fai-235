import React from "react";
import {AppContext} from "./ContextProvider";
import {Actions} from "./Types";

const List = () => {
    const [form, setForm] = React.useState({
        value: ""
    });
    const {state, dispatch} = React.useContext(AppContext);

    const handleForm = (type: string, value: string) => {
        setForm(form => ({
            ...form,
            [type]: value
        }));
    };

    const createItem = () => {
        dispatch({
            type: Actions.Create,
            payload: {
                id: Math.round(Math.random() * 10000),
                value: form.value
            }
        });
    };

    const deleteItem = (id: number) => {
        dispatch({
            type: Actions.Delete,
            payload: {
                id,
            }
        })
    }

    return (
        <div>
            <input
                value={form.value}
                onChange={e => {
                    handleForm("value", e.target.value);
                }}
                placeholder="Value"
            />
            <button onClick={createItem}>Create item</button>
            <div>
                {state.items.map(item => (
                    <div key={item.id}>
                        <span>{item.value}</span>
                        <button onClick={() => deleteItem(item.id)}>delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default List;
