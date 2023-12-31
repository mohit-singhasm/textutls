import React from 'react'

export default function Alert(props) {
    const Cap = (Word) => {
        return Word.replace(/\b\w/g, function (match) {
            return match.toUpperCase();
        })
    }
    return (
        <div style={{height:'50px'}}>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{Cap(props.alert.type)}</strong>: {props.alert.msg}
            </div>}
        </div>
    )
}
