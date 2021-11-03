import React, { useState } from "react";
import { MainConteiner } from "./styles";

type Props = {
    notes: JSX.Element[];
}

const NotesConteiner: React.FC<Props> = ({
    notes
}) => {
    
    return(
        <MainConteiner>{notes}</MainConteiner>
    );
}

export default NotesConteiner;