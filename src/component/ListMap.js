import React from "react";
import { useSelector } from "react-redux";
import MyCard from "./MyCard";

function ListMap() {
  const tasks = useSelector((state) => state);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      {tasks.map((elt) => (
        <MyCard elt={elt} key={elt.id} />
      ))}
    </div>
  );
}

export default ListMap;
