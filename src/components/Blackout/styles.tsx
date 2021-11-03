import styled from 'styled-components';

type Props = {
    visibility: string;
};

export const DivBlackout = styled.div<Props>`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    visibility: ${(props) => props.visibility};
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 100;
`