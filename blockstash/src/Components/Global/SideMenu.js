import React from 'react';
// Bootstrap Imports 
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';

class SideMenu extends React.Component{

    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <Container>
                <Jumbotron fluid>
                    <h3>BlockStash</h3>
                </Jumbotron>
                <ListGroup variant="flush">
                    <ListGroup.Item action>
                        Test 1
                    </ListGroup.Item>
                    <ListGroup.Item action variant="dark">
                        Test 2
                    </ListGroup.Item>
                    <ListGroup.Item action>
                        hello world
                    </ListGroup.Item>
                </ListGroup>
                
            </Container>
        )
    }
}

export default SideMenu;