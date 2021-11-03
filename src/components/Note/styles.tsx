import styled from 'styled-components';


type Props = {
    width: string;
    height: string;
    positionX?: string;
    positionY?: string;
    positionStyle?: string;
    zIndex?: number;
};

export const DivNoteSpace = styled.div<Props>`
    width: ${(props) => props.width};
    height: ${(props) => props.height}; 
    margin: auto;
`

export const DivNote = styled.div<Props>`
    margin-top: 20px;
    margin-left: 20px;
    margin: auto;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background-color: #131419;
    border: solid 1px;
    border-color: #1b1b1b;
    border-radius: 10px;
    position: ${(props) => props.positionStyle};
    top: ${(props) => props.positionY};
    left: ${(props) => props.positionX};
    z-index: ${(props) => props.zIndex};

    .divNoteText{
        display: block;
        margin: auto;
        width: 96%;
        height: 85%;
    }
    .textNote{
        width: 100%;
        height: 100%;
        margin: 0;
        margin-top: 5px;
        /* margin-left: 2%; */
        resize: none;
        display: block;
        font-size: 18px;
        font-family: Arial, Helvetica, sans-serif;
        color: white;
        background-color: rgba(0, 0, 0, 0);
        border: none;
        outline: none;
    }

    .textNote::-webkit-scrollbar {
        width: 12px;
    }

    .textNote::-webkit-scrollbar-track {
        background: #0e0e10;
        border-radius: 10px;
    }
    .textNote::-webkit-scrollbar-thumb {
        border: solid 1px black;
        border-radius: 10px;
        background: #131419;
        /* -webkit-box-shadow: inset 0 0 8px rgba(0,0,0,1);  */
    }

    .divNoteTitle{
        display: block;
        width: 100%;
        height: 10%;
    }

    .titleNote{
        margin: 0;
        margin-left: 2%;
        margin-top: 5px;
        font-size: 22px;
        display: block;
        color: white;
        font-family: Arial, Helvetica, sans-serif;
        background-color: rgba(0, 0, 0, 0);
        border: none;
        width: 96%;
    }
`
export const DivNoteNew = styled(DivNote)`
    height: 40px;

    .edit{
        width: 650px;
        height: 350px;
        position: absolute;
        top: calc(100vh / 2 - 200px);
        left: calc(100vw / 2 - 325px);
    }
    
`
export const DivNoteSaved = styled(DivNote)`
    display: inline-block;
    width: 120px;
    height: 120px;
    margin-top: 20px;
    margin-left: 20px;
`

export const DivNoteEdit = styled(DivNote)`
    width: 650px;
    height: 350px;
    position: absolute;
    top: calc(100vh / 2 - 200px);
    left: calc(100vw / 2 - 325px);
`

export const NoteEdit = styled.div`
    margin: auto;
    margin-top: 20px;
    width: 650px;
    height: 350px;
    background-color: #131419;
    border: solid 1px;
    border-color: #1b1b1b;
    border-radius: 10px;
    /* position: absolute;
    top: calc(100vh / 2 - 200px);
    left: calc(100vw / 2 - 325px); */
    
    
    
    .h1AppTitle{
        color: white;
        font-size: 24px;
        margin-left: 180px;
    }

    .titleNote{
        margin: 0;
        margin-left: 2%;
        /* margin-top: 5px; */
        font-size: 22px;
        display: block;
        color: white;
        font-family: Arial, Helvetica, sans-serif;
        background-color: rgba(0, 0, 0, 0);
        border: none;
        width: 96%;
    }

    .divNoteText{
        display: block;
        width: 100%;
        height: 100%;
    }

    .divNoteText.editNote{
        height: 90%;
    }

    .textNote{
        margin: 0;
        margin-left: 2%;
        margin-top: 1%;
        width: 96%;
        height: 90%;
        resize: none;
        display: block;
        font-size: 18px;
        font-family: Arial, Helvetica, sans-serif;
        color: white;
        background-color: rgba(0, 0, 0, 0);
        border: none;
    }

    .textNote:focus{
        outline: none;
    }
`
