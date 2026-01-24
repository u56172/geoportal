import React, { useState } from 'react';
import { Container, Box, TextField, Button, Paper } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import logo2 from "../static/logo2.png";

const API = "http://localhost:10000";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        
        try {
            const response = await fetch(`${API}/app/login`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ username, password })
            });
            
            const data = await response.json();
            
            if (data.status === "success") {
                localStorage.setItem("isLoggedIn", "true");
                navigate("/");
            } else {
                setError(data.message || "Login failed");
            }
        } catch (e) {
            setError("Connection error");
        }
    };

    return (
        <div className='login'>
            <div className="login__header">
                <div className='home__logo'>
                    <Link to="/" className="home__logoLink">
                        <img src={logo2} />
                    </Link>
                </div>
                <div className="login__title">LOGIN.</div>
            </div>
            
            <div className="login__content">
                <Container>
                    <Paper elevation={3} sx={{ p: 4, maxWidth: 400, margin: '0 auto' }}>
                        <Box component="form" onSubmit={handleSubmit}>
                            <TextField
                                sx={{ m: 1, width: '100%' }}
                                fullWidth
                                label="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <TextField
                                sx={{ m: 1, width: '100%' }}
                                fullWidth
                                type="password"
                                label="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {error && <div className="login__error">{error}</div>}
                            <div className="login__buttons">
                                <Button type="submit" variant='contained' sx={{ m: 1, width: '100%' }}>
                                    Login
                                </Button>
                                <Button 
                                    component={Link} 
                                    to="/register" 
                                    variant='outlined' 
                                    sx={{ m: 1, width: '100%' }}
                                >
                                    Register
                                </Button>
                            </div>
                        </Box>
                    </Paper>
                </Container>
            </div>
        </div>
    );
}

export default Login;
