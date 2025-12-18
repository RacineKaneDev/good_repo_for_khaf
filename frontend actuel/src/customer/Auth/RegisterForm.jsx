import React, { useState, useEffect } from 'react'
import { Button, TextField, Typography, MenuItem, Select, FormControl, InputLabel } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../Redux/Auth/action';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { jwt, error } = useSelector(state => state.auth);

    useEffect(() => {
        if(jwt || localStorage.getItem("jwt")) {
            navigate('/');
        }
    }, [jwt, navigate]);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        role: "ROLE_CUSTOMER",
        mobile: ""
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerUser({ userData: formData, navigate }));
    };

  return (
     <div className='flex justify-center items-center min-h-[80vh]'>
        <div className="p-10 border rounded-md shadow-md w-full md:w-[30rem] space-y-5">
             <Typography variant="h5" align="center">Inscription</Typography>
             <form onSubmit={handleSubmit} className="space-y-3">
                 <TextField
                    fullWidth
                    label="Nom Complet"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    variant="outlined"
                 />
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    value={formData.email}
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
                 <TextField
                    fullWidth
                    label="Téléphone"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    variant="outlined"
                 />
                 {/* Role Selection if needed, default Customer */}
                 {/* <FormControl fullWidth>
                    <InputLabel id="role-label">Role</InputLabel>
                    <Select
                        labelId="role-label"
                        id="role"
                        name="role"
                        value={formData.role}
                        label="Role"
                        onChange={handleChange}
                    >
                        <MenuItem value={"ROLE_CUSTOMER"}>Client</MenuItem>
                        <MenuItem value={"ROLE_COMPANY_ADMIN"}>Entreprise</MenuItem>
                    </Select>
                 </FormControl> */}
                 
                 {error && <Typography color="error">{error}</Typography>}
                 <Button type="submit" fullWidth variant="contained" size="large">S'inscrire</Button>
             </form>
             <div className="text-center">
                 <Button onClick={() => navigate('/login')}>Déjà un compte ? Se connecter</Button>
             </div>
        </div>
    </div>
  )
}

export default RegisterForm
