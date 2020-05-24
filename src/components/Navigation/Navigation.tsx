import React from 'react';
import './Navigation.scss';

export type NavigationProps = {
    prev?: any,
    next?: any
}

export const Navigation: React.FunctionComponent<NavigationProps> = (props) => {

    return (
        <>
            <div className="nav-buttons">
                <button onClick={props.prev}>Prev</button>
                <button onClick={props.next}>Next</button>
            </div>
        </>
    )
}