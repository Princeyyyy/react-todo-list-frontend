import React, { useEffect, useState } from "react";
import TodoItem from "./components/todoitem";
import Button from "@mui/material/Button";
import Footer from "./components/Footer/Footer";

function App() {
  const [todoItems, setTodoItems] = useState(null);

  // Date
  const current = new Date();
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = weekday[current.getDay()];
  const longMonth = current.toLocaleString("en-us", { month: "long" });
  const date = `${longMonth} ${current.getDate()}`;

  useEffect(() => {
    console.log("useEffect Loaded.");

    if (!todoItems) {
      fetch("https://apt3095webapp.azurewebsites.net/api/items")
        .then((response) => response.json())
        .then((data) => {
          setTodoItems(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [todoItems]);

  function addNewTodoItem() {
    fetch("https://apt3095webapp.azurewebsites.net/api/add/item", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ name: "Click to edit...", completed: false }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to add new Todo item.");
        }
        return response.json();
      })
      .then((data) => {
        setTodoItems(todoItems ? [...todoItems, data] : [data]);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error adding new Todo item:", error);
      });
  }

  function handleDeleteTodoItem(item) {
    const updatedTodoItems = todoItems.filter((data) => data.id !== item.id);

    setTodoItems(updatedTodoItems);
  }

  let content;
  if (todoItems === null) {
    content = <p>Loading data...</p>;
  } else if (todoItems.length > 0) {
    content = todoItems.map((todoItem) => (
      <TodoItem
        data={todoItem}
        key={todoItem.id}
        emitDeleteTodoItem={handleDeleteTodoItem}
      />
    ));
  } else {
    content = <p>No items. Be the first to add one.</p>;
  }

  return (
    <>
      <div className="main-body">
        <div className="todo-container">
          <div className="above-label">
            <h2 style={{ textTransform: "uppercase" }}>Todo List</h2>
          </div>

          <div className="date">
            <h3>
              Today is {day}, {date}
            </h3>
          </div>

          <div className="addbtn">
            <Button variant="contained" onClick={addNewTodoItem}>
              Add task
            </Button>
          </div>

          <div className="todoitems">{content}</div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
