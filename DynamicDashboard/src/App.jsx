

import React from "react";
import Premium from "./components/PremiumGreeting.jsx";
import Basic from "./components/BasicGreeting.jsx";

export default function App() {
  const userName = "Jack O'Neill";
  const isPremium = true;

  const tasks = [
    { id: 1, taskName: "Send Daniel Jackson's family flowers", completed: true },
    { id: 2, taskName: "Decide if I like Jonas Quinn", completed: false },
    { id: 3, taskName: "Find a replacement for DJ after sparring with Teal'c", completed: false },
  ];

  const completedCount = tasks.filter((tasks) => tasks.completed).length;
  const incompleteCount = tasks.length - completedCount;

  const today = new Date().toLocaleDateString();

  return (
    <div style={{ fontFamily: "sans-serif", lineHeight: 1.5, padding: "2rem" }}>

      <h1>Hello, {userName}!</h1>
      <p>
        {isPremium ? <Premium /> : <Basic />}
      </p>

      <h2>Your Tasks</h2>

      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{ color: task.completed ? "green" : "red" }}
          >
            {task.completed ? "✅" : "❌"} {task.taskName}
          </li>
        ))}
      </ul>

      <p>
        Completed: {completedCount} • Incomplete: {incompleteCount}
      </p>

    </div>
  );
}
