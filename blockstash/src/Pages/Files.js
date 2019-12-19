import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

class Files extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <Container style={{border : "1px solid red"}}>
                <Col>Hello World</Col>
                <Row>
                    <Col>Test 1</Col>
                    <Col>Test 2</Col>
                </Row>
            </Container>
        )
    }
}

export default Files;