import React from 'react'
import { Container, Row, Button, ButtonGroup } from 'react-bootstrap'
function FirstPage({firstPageChange}){
    return(
        <Button variant="info" onClick={firstPageChange}>First page</Button>
    )
}
export default FirstPage