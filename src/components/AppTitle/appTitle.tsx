import React from "react";
import { TopBar } from "./styles";

const AppTitle: React.FC = () =>{
    return(
        <TopBar>
            <h1 className="h1AppTitle">My Notes</h1>
        </TopBar>
    );
}

export default AppTitle;