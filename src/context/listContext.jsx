import {useContext, useState, createContext} from "react";
import {data} from "../data";

const ListContext = createContext({});
export const useListContext = () => {
    return useContext(ListContext);
};

export default function ListContextProvider({children}) {
    const [items, setItems] = useState(
        data.map(item => {
            return {label: item, side: "left", selected: false};
        })
    );
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
