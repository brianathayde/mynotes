import React, { useState }  from "react";
import { DivBlackout } from "./styles";

type Props = {
    active: boolean;
    changeNoteState: () => void;
}

const Blackout: React.FC<Props> = ({
    active,
    changeNoteState,
}) => {
    const [isActive, setState] = useState(active);
    let visibility;
    active ? visibility = 'visible': visibility = 'hidden';
    return (
        <DivBlackout onClick={()=>changeNoteState()} visibility={visibility}>
        </DivBlackout>
    );
}
  

export default Blackout;