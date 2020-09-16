import React from 'react'
import {TransitionGroup, CSSTransition} from 'react-transition-group'

export const Notes = ( { notes, onRemove }) => (
    < TransitionGroup component="ul" className="list-group">
        { notes.map(note => (
        <CSSTransition
            key={note.id}
            className="note"
            timeout={800}
        >
            <li
                className="list-group-item note"
            >
            <div>
                <strong>{note.title}</strong>
                {/*TODO edit date */}
                <small>{new Date().toLocaleDateString()}</small>
            </div>
            {/*TODO add alert to delete*/}
            <button
                type="button"
                className="btn btn-outline-danger btn-sm"
                onClick={() => onRemove(note.id)}
                > &times;
            </button>
            </li>
        </CSSTransition>
        ))}
    </TransitionGroup>
)