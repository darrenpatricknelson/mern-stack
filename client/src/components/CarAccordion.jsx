import { Accordion, Button } from 'react-bootstrap';
// import { useState, useEffect } from 'react';

function CarAccordion() {
  return (
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Car name #1</Accordion.Header>
        <Accordion.Body>
          <ul>
            <li>Model: </li>
            <li>Registration #: </li>
            <li>Owner: </li>
            <li>Year: </li>
          </ul>

          <Button variant="warning">Update Car</Button>
          <Button variant="danger">Delete Car</Button>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default CarAccordion;
