import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { updateTask } from "../redux/action";

function UpdateTask({ idTask, handleClose }) {
  console.log("object :>> ", idTask);

  const [newText, setNewText] = useState("");
  const dispatch = useDispatch();

  const handelChange = (e) => {
    setNewText(e.target.value);
  };
  const handelSubmit = (e) => {
    e.preventDefault();

    dispatch(updateTask(idTask, newText));
    handleClose();
  };

  return (
    <Form
      className="container"
      style={{ width: "500px" }}
      onSubmit={handelSubmit}
    >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="text"
          placeholder="Enter text"
          onChange={handelChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default UpdateTask;
