import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  function addTodo() {
    if (!text.trim()) return;
    setTodos([...todos, { id: Date.now(), text }]);
    setText("");
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>One-File React App</h1>

      <div style={styles.card}>
        <h2>Counter</h2>
        <p style={styles.counter}>{count}</p>
        <div>
          <button style={styles.button} onClick={() => setCount(count + 1)}>+</button>
          <button style={styles.button} onClick={() => setCount(count - 1)}>-</button>
        </div>
      </div>

      <div style={styles.card}>
        <h2>Todo List</h2>
        <input
          style={styles.input}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a task"
        />
        <button style={styles.button} onClick={addTodo}>Add</button>

        <ul style={styles.list}>
          {todos.map(todo => (
            <li key={todo.id} style={styles.todo}>
              {todo.text}
              <button
                style={styles.delete}
                onClick={() => removeTodo(todo.id)}
              >
                ✕
              </button>
            </li>
          ))}
        </ul>

        {todos.length === 0 && <p>No tasks yet</p>}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#0f172a",
    color: "#e5e7eb",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 40,
    gap: 24,
    fontFamily: "system-ui, sans-serif",
  },
  title: {
    fontSize: 32,
  },
  card: {
    background: "#020617",
    padding: 24,
    borderRadius: 12,
    width: 320,
  },
  counter: {
    fontSize: 40,
    margin: "10px 0",
  },
  button: {
    padding: "8px 14px",
    margin: 4,
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
  },
  input: {
    width: "100%",
    padding: 8,
    marginBottom: 8,
    borderRadius: 6,
    border: "1px solid #475569",
    background: "#020617",
    color: "white",
  },
  list: {
    listStyle: "none",
    padding: 0,
    marginTop: 10,
  },
  todo: {
    display: "flex",
    justifyContent: "space-between",
    background: "#020617",
    padding: 8,
    borderRadius: 6,
    marginBottom: 6,
  },
  delete: {
    background: "transparent",
    border: "none",
    color: "#f87171",
    cursor: "pointer",
    fontSize: 16,
  },
};
