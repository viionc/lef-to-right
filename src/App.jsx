import {useState} from "react";
import "./App.css";
import List from "./components/List";
import Actions from "./components/Actions";
import ListContextProvider from "./context/listContext";

function App() {
    return (
        <>
            <div className="wrapper">
                <ListContextProvider>
                    <List side={"left"}></List>
                    <Actions></Actions>
                    <List side={"right"}></List>
                </ListContextProvider>
            </div>
        </>
    );
}

export default App;
