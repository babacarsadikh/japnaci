import React, { useState } from 'react';
import Grid from "@mui/material/Grid";
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useRouter } from 'next/router'
import Link from "next/link";
import axios from 'axios';

const LoginPage = () => {
    const router = useRouter();

    const [credentials, setCredentials] = useState({
        email: 'user@gmail.com',
        password: '123456',
    });

    const [loggedInUser, setLoggedInUser] = useState(null);

    const handleInputChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
        validator.showMessages();
    };

    const handleRememberCheckbox = () => {
        setCredentials({ ...credentials, remember: !credentials.remember });
    };

    const [validator] = React.useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/users/login', credentials);

            if (response.data.token) {
                // Authentification réussie
                setLoggedInUser({ username: response.data.username });
                router.push('/');
            } else {
                // Authentification échouée
                toast.error("Identifiants invalides");
            }
        } catch (error) {
            console.error("Erreur lors de l'authentification :", error);
            toast.error("Une erreur s'est produite lors de l'authentification");
        }
    };

    return (
        <Grid className="loginWrapper">
            <Grid className="loginForm">
                <h2 style={{ color: "#1d5d1d", fontFamily: 'Buddy Champion', fontSize: "50px" }}>JAPNACI</h2>
                <p style={{ color: "black", fontSize: "14px" }}>Pour vous connecter, veuillez saisir votre adresse email et votre mot de passe.</p>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="Email"
                                value={credentials.email}
                                variant="outlined"
                                name="email"
                                label="Email"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={handleInputChange}
                                onChange={handleInputChange}
                            />
                            {validator.message('email', credentials.email, 'required|email')}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="Mot de passe"
                                value={credentials.password}
                                variant="outlined"
                                name="password"
                                type="password"
                                label="Mot de passe"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={handleInputChange}
                                onChange={handleInputChange}
                            />
                            {validator.message('password', credentials.password, 'required')}
                        </Grid>
                        <Grid item xs={12}>
                            <Grid className="formFooter">
                                <Button fullWidth className="cBtnTheme" type="submit" style={{ backgroundColor: "#1d5d1d", fontSize: "15px" }}>Se connecter</Button>
                            </Grid>
                            <p className="noteHelp" >Vous n'avez pas de compte ? <Link href="/register" style={{ color: "#1d5d1d", fontSize: "15px" }}>Créer un compte </Link></p>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
          
        </Grid>
    );
};

export default LoginPage;
