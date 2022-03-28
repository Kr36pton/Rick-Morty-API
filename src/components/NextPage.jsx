import React from 'react'
import {Button} from 'react-bootstrap'
function NextPage({nextPageChange}){
    return(
        <Button variant="info" onClick={nextPageChange}>Next Page</Button>
    )
}
export default NextPage