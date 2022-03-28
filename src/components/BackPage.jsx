import React from 'react'
import {Button} from 'react-bootstrap'
function BackPage({backPageChange}){
    return(
        <Button variant="info" onClick={backPageChange}>Back Page.</Button>
    )
}
export default BackPage