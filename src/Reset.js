import React from 'react';
import './Reset.css';

const Reset = ({reset, onClick}) => (
    <button className="btn btn-default" onClick={ () => onClick(reset)}>Reset</button>
);

export default Reset;
