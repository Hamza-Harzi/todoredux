import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { deleteTask, doneTask } from "../redux/action";
import UpdateTask from "./UpdateTask";

import Modal from "react-bootstrap/Modal";

function MyCard({ elt }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const handleDelet = () => {
    dispatch(deleteTask(elt.id));
  };

  const handleDoneUndone = () => {
    dispatch(doneTask(elt.id));
  };
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title
            style={{
              textDecoration: elt.done ? "line-through" : "",
              color: elt.done ? "green" : "black",
            }}
          >
            {elt.text}
          </Card.Title>
          <Button
            onClick={handleDelet}
            style={{
              background: "none",
              color: "red",
              border: "none",
            }}
            variant="danger"
          >
            X
          </Button>
          <Button
            style={{
              color: "blue",
            }}
            onClick={handleShow}
            variant="premary"
          >
            update
          </Button>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Done"
              onClick={handleDoneUndone}
            />
          </Form.Group>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header
          style={{ width: "600px", backgroundColor: "red" }}
          closeButton
        >
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ width: "600px", backgroundColor: "red" }}>
          <UpdateTask idTask={elt.id} handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MyCard;
