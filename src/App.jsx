import React, { Component } from 'react';
import './App.css';

import { Col, Row, Grid } from 'react-bootstrap';
import SearchLine from './othersComponents/SearchLine';
import SearchResult from './othersComponents/SearchResult';
import Notification from './othersComponents/Notification';

import Alert from 'react-s-alert';

// mandatory
import 'react-s-alert/dist/s-alert-default.css';

// optional - you can choose the effect you want
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import 'react-s-alert/dist/s-alert-css-effects/scale.css';
import 'react-s-alert/dist/s-alert-css-effects/bouncyflip.css';
import 'react-s-alert/dist/s-alert-css-effects/flip.css';
import 'react-s-alert/dist/s-alert-css-effects/genie.css';
import 'react-s-alert/dist/s-alert-css-effects/jelly.css';
import 'react-s-alert/dist/s-alert-css-effects/stackslide.css';

import MyCustomContentTemplate from './othersComponents/MyCustomContentTemplate';
class App extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col md={2}></Col>
          <Col md={8}>
            <h1>Привет</h1>
            <Alert stack={{limit: 3}} contentTemplate={MyCustomContentTemplate} /> 
            <SearchLine />
            <SearchResult />
            <Notification />
              
          </Col>
          <Col md={2}></Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
