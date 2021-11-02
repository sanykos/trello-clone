export type Task = {
    id: string;
    text: string;
};

export type List = {
    id: string;
    text: string;
    tasks: Task[];
};

export type AppState = {
    lists: List[];
};

export type AppStateContextProps = {
    lists: List[];
    getTasksByListId(id: string): Task[];
};
