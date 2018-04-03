import React from 'react';
import Instruction from '../components/Instruction/Instruction';

const InstructionList = props => (
    <div>
        <h2>Instructions:</h2>
        {props.instrList.map((instr, idx) => { return <Instruction key={idx} instruction={instr.instruction} />})}
    </div>
)

export default InstructionList;