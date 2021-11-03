import React, { useState } from "react";
import { NoteEdit, DivNote, DivNoteSaved, DivNoteNew, DivNoteEdit, DivNoteSpace } from "./styles";
import  TextNote  from "../TextNote/textNote";

export enum NoteStates {
    New,
    Edit,
    Saved,
}

type Props = {
    noteState: NoteStates;
    changeNoteState: () => void;
}

const Note: React.FC<Props> = ({
    noteState,
    changeNoteState,
}) => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [state, setState] = useState(noteState);

    const changeState = () => {
        setState(NoteStates.Edit)
        changeNoteState();
    }

    if(state == NoteStates.New){
        if(text == ''){
            return (
                <DivNoteSpace width='650px' height='40px'>
                    <DivNote width='650px' height='40px'>
                        <div className="divNoteTitle">
                            {/* <input className="titleNote" onChange={(e)=>setTitle(e.target.value)} type="text" id="fname" name="fname" placeholder="Título" value={title}/> */}
                            {/* <h2 className="titleNote">{props.title}</h2> */}
                        </div>
                        <div className="divNoteText">
                            <textarea className="textNote" onChange={()=>changeState()} placeholder="Criar nova nota...">{text}</textarea>
                        </div>
                    </DivNote>
                </DivNoteSpace>
            );
        }
    }
    if(state == NoteStates.Edit){
        const positionX = 'calc(100vw / 2 - 325px)';
        const positionY = 'calc(100vh / 2 - 200px)';
        const positionStyle = 'absolute';
        const width = '650px';
        const height = '350px';
        return (
            <DivNoteSpace width={width} height='60px'>
                <DivNote width={width} height={height} zIndex={100} positionX = {positionX} positionY = {positionY} positionStyle = {positionStyle}>
                    <div className="divNoteTitle">
                        <input className="titleNote" onChange={(e)=>setTitle(e.target.value)} type="text" id="fname" name="fname" placeholder="Título" value={title}/>
                    </div>
                    <div className="divNoteText editNote">
                        <textarea className="textNote" onChange={(e)=>setText(e.target.value)}  placeholder="Criar nova nota...">{text}</textarea>
                    </div>
                </DivNote>
            </DivNoteSpace>
        );
    }
    else{
        return(
            <DivNoteSaved width='120px' height='120px'/>
        );
    }
}

export default Note;