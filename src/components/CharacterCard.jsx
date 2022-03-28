import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
function CharacterCard(props){
    return(
        <>
            <Card border="primary" className='mb-3 mx-3 bg-primary text-white' style={{ width: '18rem' }}>
                <Card.Img variant="top" className='mt-3' src={props.charImage} />
                <Card.Body>
                    <Card.Header>
                        <Card.Title><a href='/info' className='text-warning'><h3>{props.charName}</h3></a></Card.Title>
                        <Card.Text>{props.charSpecies}</Card.Text>
                    </Card.Header>
                </Card.Body>
                <ListGroup className="list-group-flush ">
                    <ListGroupItem className='bg-primary text-white'>{props.charStatus}</ListGroupItem>
                    <ListGroupItem className='bg-primary text-white'>{props.charGender}</ListGroupItem>
                    <ListGroupItem className='bg-primary text-white'>{props.charType}</ListGroupItem>
                </ListGroup>
            </Card>
        </>
    )
}
export default CharacterCard