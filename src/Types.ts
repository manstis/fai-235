type ActionMap<M extends { [index: string]: any }> = {
    [Key in keyof M]: M[Key] extends undefined
        ? {
            type: Key;
        }
        : {
            type: Key;
            payload: M[Key];
        }
};

export enum Actions {
    Create = "CREATE_ITEM",
    Delete = "DELETE_ITEM",
    Undo = "UNDO",
    Redo = "REDO"
}

export type ItemType = {
    id: number;
    value: string;
};

export type ItemPayload = {
    [Actions.Create]: {
        id: number;
        value: string;
    };
    [Actions.Delete]: {
        id: number;
    };
    [Actions.Undo]: undefined;
    [Actions.Redo]: undefined;
};

export type ItemActions = ActionMap<ItemPayload>[keyof ActionMap<ItemPayload>];

export type InitialStateType = {
    items: ItemType[];
};
