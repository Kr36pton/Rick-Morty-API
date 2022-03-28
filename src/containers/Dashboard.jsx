import React, { Fragment, useEffect, useState } from 'react'
import CharacterCard from '../components/CharacterCard'
import Container from 'react-bootstrap/Container'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Row from 'react-bootstrap/Row'
import FirstPage from '../components/FirstPage'
import LastPage from '../components/LastPage'
import BackPage from '../components/BackPage'
import NextPage from '../components/NextPage'

function Dashboard(props){

var pageNumber = 1 

var url = 'https://rickandmortyapi.com/api/character'+'?page='+1

function firstPageHandler(event) {
    pageNumber = 1
    console.log(pageNumber)
    url='https://rickandmortyapi.com/api/character'+'?page='+pageNumber
    console.log(url)
    window.location='./page'
}
function lastPageHandler(event) {
    pageNumber = 42;
    console.log(pageNumber)
    url='https://rickandmortyapi.com/api/character'+'?page='+pageNumber
    console.log(url)
    window.location='./page'
}
function backPageHandler(event) {
    if (pageNumber == 1) {
        pageNumber = 1
        console.log(pageNumber)
    }else{
        pageNumber --
        console.log(pageNumber)
        url = 'https://rickandmortyapi.com/api/character'+'?page='+pageNumber
        console.log(url)
        window.location='./page'
    }
}
function nextPageHandler(event) {
    if (pageNumber == 42) {
        pageNumber = 42
        console.log(pageNumber)
    }else{
        pageNumber ++
        console.log(pageNumber)
        url = 'https://rickandmortyapi.com/api/character'+'?page='+pageNumber
        console.log(url)
        window.location='./page'
    }
}

const [character, setCharacter] = useState()

const fetchApi = async () => {
    const response = await fetch(url)
    const responseJSON = await response.json()
    setCharacter(responseJSON.results)
}
useEffect(() => {
    fetchApi()
}, [])

    return (  
        <>
            <Container fluid>
                <h1>Personajes</h1>
                <Row className="justify-content-center">
                    {!character ? "Cargando Personajes" :
                    character.map( (character,index) => {
                        return <CharacterCard 
                        key = {character.id}
                        charName = {character.name}
                        charImage = {character.image}
                        charStatus = {character.status}
                        charSpecies = {character.species}
                        charGender = {character.gender}
                        charType = {character.type}
                        ></CharacterCard>
                    })
                    }
                </Row>
            </Container>
            <Container>
                <Row className="justify-content-center">
                    <ButtonGroup aria-label="Basic example">
                        <FirstPage firstPageChange={firstPageHandler}></FirstPage>
                        <BackPage backPageChange={backPageHandler}></BackPage>
                        <NextPage nextPageChange={nextPageHandler}></NextPage>
                        <LastPage lastPageChange={lastPageHandler}></LastPage>
                    </ButtonGroup>
                </Row> 
            </Container>
        </>
    );
}
 
export default Dashboard;