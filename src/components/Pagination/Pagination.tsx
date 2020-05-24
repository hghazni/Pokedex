import React from 'react';

type PaginationProps = {
    gotoNextPage: any
    gotoPrevPage: any
}

export const Pagination: React.FunctionComponent<PaginationProps> = (props) => {
    return (
        <>
            {props.gotoPrevPage && <button onClick={props.gotoPrevPage}>Previous</button>}
            {props.gotoPrevPage && <button onClick={props.gotoNextPage}>Next</button>}
        </>
    )
}