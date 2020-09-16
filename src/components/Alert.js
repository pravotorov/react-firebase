import React, {useContext} from 'react';
import alertContext from "../context/alert/alertContext";
import {CSSTransition} from 'react-transition-group'

export const Alert = () => {
    const {alert, hide} = useContext(alertContext)

    return (
        <CSSTransition
        in={alert.visible}
        timeout={750}
        className={'alert'}
        mountOnEnter
        unmountOnExit
        >
            <div className={`alert alert-${alert.type || 'warning'} alert-dismissible`} >
                <strong>Внимание!</strong>
                &nbsp; {alert.text}
                <button onClick={hide} type="button" className="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </CSSTransition>
    )
}