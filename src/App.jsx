import React, { Component } from 'react';
import './App.css';

import { Col, Row, Grid } from 'react-bootstrap';
import SearchLine from './othersComponents/SearchLine';
import SearchResult from './othersComponents/SearchResult';

class App extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col md={2}></Col>
          <Col md={8}>
            <h1>Some head</h1>
            <SearchLine />
            <SearchResult />
          </Col>
          <Col md={2}></Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
