import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/action";
import { v4 as uuidv4 } from "uuid";

function AddTask() {
  const [newTask, setNewTask] = useState({ id: "", text: "", done: false });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setNewTask({ ...newTask, id: uuidv4(), text: e.target.value });
  };

  const handeleSubmit = (event) => {
    event.preventDefault();

    dispatch(addTask(newTask));
    setNewTask({ text: "" });
  };

  return (
    <Form
      className="container"
      style={{ width: "500px" }}
      onSubmit={handeleSubmit}
    >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="text"
          placeholder="Enter text"
          onChange={handleChange}
          value={newTask.text}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default AddTask;
