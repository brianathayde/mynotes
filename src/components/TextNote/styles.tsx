import styled from 'styled-components';

type Props = {
    divWidth: string;
    divHeight: string;
};

export const TextArea = styled.textarea`
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
`
export const DivNoteText = styled.div<Props>`
    display: block;
    width: 100%;
    height: ${(props) => props.divHeight};
`