import React from "react";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { doneFilter } from "../redux/action";

function DoneFilter() {
  const dispatch = useDispatch();
  const handleDoneFilter = () => {
    dispatch(doneFilter());
  };
  return (
    <div>
      <Button variant="success" onClick={handleDoneFilter}>
        Success
      </Button>{" "}
      <h1>hello</h1>
    </div>
  );
}

export default DoneFilter;
