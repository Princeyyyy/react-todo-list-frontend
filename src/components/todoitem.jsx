import { Checkbox, IconButton } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import "../App.css";

const TodoItem = (props) => {
  const { emitDeleteTodoItem } = props;
  const [todoItem, setTodoItem] = useState(props.data);
  const [isDirty, setIsDirty] = useState(false);
  const debounceTimeout = useRef(null);

  useEffect(() => {
    if (isDirty) {
      debounceTimeout.current = setTimeout(() => {
        fetch(
          `https://apt3095webapp.azurewebsites.net/api/update/item/${todoItem.id}`,
          {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(todoItem),
          }
        )
          .then((response) => {
            if (!response.ok) {
              throw new Error("Failed to update Todo item.");
            }
            return response.json();
          })
          .then((data) => {
            setTodoItem(data);
            setIsDirty(false);
          })
          .catch((error) => {
            console.error("Error updating Todo item:", error);
          });
      }, 500);
    }

    return () => {
      clearTimeout(debounceTimeout.current);
    };
  }, [todoItem, isDirty]);

  function updateTask(e) {
    const updatedTodoItem = { ...todoItem, name: e.target.value };
    setTodoItem(updatedTodoItem);
    setIsDirty(true);
  }

  function deleteTodoItem() {
    fetch(
      `https://apt3095webapp.azurewebsites.net/api/delete/item/${todoItem.id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete Todo item.");
        }
        emitDeleteTodoItem(todoItem);
      })
      .catch((error) => {
        console.error("Error deleting Todo item:", error);
      });
  }

  function handleCheckboxChange() {
    const updatedTodoItem = { ...todoItem, completed: !todoItem.completed };
    setTodoItem(updatedTodoItem);
    setIsDirty(true);
  }

  return (
    <div>
      <Checkbox checked={todoItem.completed} onChange={handleCheckboxChange} />
      {todoItem.completed ? (
        <input
          type="text"
          className="done"
          value={todoItem.name}
          onChange={updateTask}
        />
      ) : (
        <input
          type="text"
          value={todoItem.name}
          className="itemText"
          onChange={updateTask}
        />
      )}

      <IconButton aria-label="delete" size="large" onClick={deleteTodoItem}>
        <DeleteIcon fontSize="inherit" color="primary" />
      </IconButton>
    </div>
  );
};

export default TodoItem;
