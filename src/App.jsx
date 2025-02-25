// src/App.jsx
import React from "react";
import UserCard from "./UserCard";

function App() {
  const users = [
    {
      name: "John Doe",
      email: "john@example.com",
      age: 30,
      backgroundColor: "#e0f7fa",
    },
    { name: "Jane Smith", email: "jane@example.com", age: 25 },
    {
      name: "Alice Johnson",
      email: "alice@example.com",
      age: 28,
      backgroundColor: "#ffe0b2",
    },
  ];

  return (
    <div className="App">
      <h1>User List</h1>
      <div className="user-cards">
        {users.map((user, index) => (
          <UserCard
            key={index}
            name={user.name}
            email={user.email}
            age={user.age}
            backgroundColor={user.backgroundColor} // Optional prop
          />
        ))}
      </div>
    </div>
  );
}

export default App;
