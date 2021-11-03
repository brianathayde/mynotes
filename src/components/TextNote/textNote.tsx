import React, { useState } from "react";
import { DivNoteText, TextArea } from "./styles";

type Props ={
    width: string;
    height: string;
    text: string;
}

const TextNote: React.FC<Props> = ({
    width,
    height,
    text,
}) => {
    return (
        <TextArea className="textNote" placeholder="Criar nova nota...">{text}</TextArea>
    );
}

export default TextNote;