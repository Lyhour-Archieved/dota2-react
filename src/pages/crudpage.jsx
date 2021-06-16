import { Button, Input } from "antd";
import { useState } from "react";

const CrudPage = () => {
  const [todo, setTodo] = useState([]);
  const [textInput, setTextInput] = useState();

  return (
    <div style={{ padding: 30 }}>
      <h1>CRUD Operation : CREATE READ UPDATE DELETE</h1>

      <h2>Todo Application</h2>
      <h3>CREATE</h3>
      <Input
        allowClear
        style={{ width: 500 }}
        onChange={(elements) => {
          console.log(elements.target.value);
          setTextInput(elements.target.value);
        }}
      />
      <Button
        onClick={() => {
          setTodo([...todo, textInput]);
        }}
      >
        Add Todo
      </Button>

      <h3>List todo</h3>
      {todo?.map((data) => {
        return (
          <li
            style={{ cursor: "pointer" }}
            onClick={() => {
              const newData = todo.filter((filterData) => filterData !== data);
              console.log(newData);
              setTodo(newData);
            }}
          >
            {data}
          </li>
        );
      })}
    </div>
  );
};

export default CrudPage;
