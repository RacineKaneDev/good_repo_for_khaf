import React, { useState, useEffect } from 'react'
import { Button, TextField, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../Redux/Auth/Action';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, error, jwt } = useSelector(state => state.auth);
    
    // If already logged in, redirect
    useEffect(() => {
        if(jwt || localStorage.getItem("jwt")) {
            navigate('/');
        }
    }, [jwt, navigate]);

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser({ data: formData, navigate })); 
    };

  return (
    <div className='flex justify-center items-center min-h-[80vh]'>
        <div className="p-10 border rounded-md shadow-md w-full md:w-[30rem] space-y-5">
             <Typography variant="h5" align="center">Connexion</Typography>
             <form onSubmit={handleSubmit} className="space-y-3">
                 <TextField
                    fullWidth
                    label="Email"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    variant="outlined"
                 />
                 <TextField
                    fullWidth
                    label="Mot de passe"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    variant="outlined"
                 />
                 {error && <Typography color="error">{error}</Typography>}
                 <Button type="submit" fullWidth variant="contained" size="large">Se connecter</Button>
             </form>
             <div className="text-center">
                 <Button onClick={() => navigate('/register')}>Pas encore de compte ? S'inscrire</Button>
             </div>
        </div>
    </div>
  )
}

export default LoginForm
