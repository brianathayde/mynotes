import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import AppTitle from './components/AppTitle/appTitle';
import Note, { NoteStates } from './components/Note/note';
import NotesConteiner from './components/NotesConteiner/notesConteiner';
import Blackout from './components/Blackout/blackout';

function App() {
    const [editingNote, setEditingNote] = useState(false);
    const changeNoteState = () => {
        setEditingNote(!editingNote);
    }
    let savedNotes: JSX.Element[] = [];
    for(let i = 0; i < 10; i++){
        savedNotes.push(<Note noteState={NoteStates.Saved} changeNoteState={changeNoteState}></Note>);
    }

    return (
        <div>
            <Blackout active={editingNote} changeNoteState={changeNoteState}/>
            <AppTitle/>
            <Note noteState={NoteStates.New} changeNoteState={changeNoteState}/>
            {/* <Note noteState={NoteStates.Saved}/> */}
            {/* <NotesConteiner notes = {savedNotes}></NotesConteiner> */}
        </div>
    );
}

export default App;
