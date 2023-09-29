import {useContext, useState, createContext} from "react";

const ListContext = createContext({});
export const useListContext = () => {
    return useContext(ListContext);
};

export default function ListContextProvider({children}) {
    const [items, setItems] = useState([
        {
            label: 1,
            side: "left",
            selected: false,
        },
        {
            label: 2,
            side: "left",
            selected: false,
        },
        {
            label: 3,
            side: "left",
            selected: false,
        },
        {
            label: 4,
            side: "left",
            selected: false,
        },
    ]);
    const moveItems = side => {
        let newItems = items.map(item => {
            if (item.selected && item.side != side) {
                item.side = side;
                item.selected = false;
            }
            return item;
        });
        setItems(newItems);
    };

    const handleItemSelected = label => {
        let newItems = items.map(item =>
            item.label === label ? {...item, selected: !item.selected} : item
        );
        setItems(newItems);
    };

    return (
        <ListContext.Provider
            value={{
                items,
                moveItems,
                setItems,
                handleItemSelected,
            }}
        >
            {children}
        </ListContext.Provider>
    );
}
