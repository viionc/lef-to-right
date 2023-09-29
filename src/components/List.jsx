import React, {useEffect, useState} from "react";
import {useListContext} from "../context/listContext";

function List({side}) {
    const {items, handleItemSelected} = useListContext();
    let content = items.filter(item => item.side === side);

    return (
        <div className="list">
            {content.map(item => {
                return (
                    <div key={`${item.label}-${side}`}>
                        <input
                            id={`${item.label}-${side}-input`}
                            type="checkbox"
                            onChange={() => handleItemSelected(item.label)}
                            checked={item.selected}
                        ></input>
                        <label htmlFor={`${item.label}-${side}-input`}>{item.label}</label>
                    </div>
                );
            })}
        </div>
    );
}

export default List;
