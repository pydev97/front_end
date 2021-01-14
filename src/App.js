import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button,Modal, ModalBody} from 'react-bootstrap'
import ModalHeader from 'react-bootstrap/esm/ModalHeader';

function App() {
  return (
    <div className="App">
      <Button>OPen</Button>
      <Modal show={true} centered>
        <ModalHeader>
          hello
        </ModalHeader>
        <ModalBody>
          dm con meo lon
        </ModalBody>
        <Modal.Footer>
          <Button>lol</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
