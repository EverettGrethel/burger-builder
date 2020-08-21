import React from 'react';
import classes from './Button.css'

const button = (props) => (
    <button
        //append the two classes
        className={[classes.Button, classes[props.btnType]].join(' ')}
        onClick={props.clicked}>{props.children}</button>
);

export default button;