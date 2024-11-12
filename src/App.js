import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser } from "./redux/actions";
import { Button, TextField } from "@mui/material";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const addAUser = () => {
    if (name && email && role) { 
      const newUser = {
        id: Date.now(),
        name: name,
        email: email,
        role: role,
      };
      dispatch(addUser(newUser));
      setName("");
      setEmail("");
      setRole("");
    } else {
      alert("all the three fields are required");
    }
  };

  const deleteAUser = (userId) => {
    dispatch(deleteUser(userId));
  };
  console.log("users",users)

  return (
    <div
      className="App"
      style={{
        display: "flex",
        gap: "100px",
        justifyContent: "center",
        marginTop: "150px",
      }}
    >
      <div>
        <p> User Management </p>
        <div
          style={{
            display: "flex",
            minWidth: "600px",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <TextField
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
          />
          <TextField
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
          <TextField
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="Enter role"
          />
        </div>
        <div
          style={{
            display: "flex",
            minWidth: "600px",
            justifyContent: "end",
            marginTop: "10px",
          }}
        >
          <Button onClick={addAUser} variant="contained">
            Submit
          </Button>
        </div>
      </div>

      <div style={{ width: "600px" }}>
        <h2>User List:</h2>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>Name</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Email
              </th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>Role</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={index}
                style={{
                  backgroundColor: "#fff",
                }}
              >
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {user.name}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {user.email}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {user.role}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  <Button onClick={()=>deleteAUser(user.id)} variant="contained">
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
