import React from 'react'
import {Button} from 'react-bootstrap'
function LastPage({lastPageChange}){
    return(
        <Button variant="info" onClick={lastPageChange}>Last page</Button>
    )
}
export default LastPage