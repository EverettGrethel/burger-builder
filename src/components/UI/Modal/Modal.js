import React, { Component } from 'react';

import classes from './Modal.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
    //This prevents the Modal and its BurgerSummary child from updating unless it needs to
    //It is triggered either by show prop changing or OrderSummary child switching to Spinner child
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    componentDidUpdate() {
        console.log('[Modal.js] WillUpdate');
    }

    render() {
        return (
            //If Modal is showing, Backdrop also shows. If Backdrop is clicked, Backdrop and Modal disappear
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div 
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Aux>
        
        );
    }
}

export default Modal;