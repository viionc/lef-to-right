import {useListContext} from "../context/listContext";

function Actions() {
    const {moveItems} = useListContext();
    return (
        <div className="actions">
            <button onClick={() => moveItems("right")}>{">"}</button>
            <button onClick={() => moveItems("left")}>{"<"}</button>
        </div>
    );
}

export default Actions;
