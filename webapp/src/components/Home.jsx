import React from 'react';
import './Home.css';
import { Container, Row, Col } from 'reactstrap';
import HomeSearch from './HomeSearch';
import TwitterTimeline from './TwitterTimeline';
import Midias from './Midias';
import GrandesTemas from './GrandesTemas';

function Home() {
    return (
        <Container className="home-container">
        
            {/* 1º seção: busca + timeline do twitter */}
            <Row className="home-row">
                <Col md="6" sm="12" className="home-col">
                    <HomeSearch/>
                </Col>
                <Col md="6" sm="12" className="home-col">
                    <TwitterTimeline/>
                </Col>
            </Row>

            <div className="divider" style={{marginTop: "46px"}}/>

            {/* 2º seção: explicativo sobre as mídias */}
            <Midias/>

            <div className="divider" style={{marginTop: "60px"}}/>

            {/* 3º seção: explicativo sobre os grandes temas */}
            <GrandesTemas/>

            <div className="divider" style={{marginTop: "60px"}}/>

        </Container>
    )
}

export default Home