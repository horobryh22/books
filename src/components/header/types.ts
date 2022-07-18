export type SelectItems = {
    [key: string]: SelectItem[];
};

export type SelectItem = {
    id: number;
    value: string;
    title: string;
};

export type SearchFormValues = {
    category: string;
    sorting: string;
    bookTitle: string;
};
