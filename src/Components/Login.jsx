import React from "react";
import "./Login.css";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';


function Login({ handleLogin }) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = { username, password };
    handleLogin(payload);
  };
  return (
    <div className="login">
      <Typography variant="h6"
            noWrap
            
            
            sx={{
              mr: 2,
              
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '1rem',
              color: 'white',
              textAlign: 'center'
              
            }}>Login</Typography>
      <form onSubmit={handleSubmit} style={{display: 'flex',flexDirection: 'column',alignItems: 'center',}}>
        <input className="form-control" 
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
        />
        <br />
        <input className="form-control"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          type="password"
        />
        <br />
        <input className="form-control btn" type="submit" />
      </form>
    </div>
  );
}

export { Login };
