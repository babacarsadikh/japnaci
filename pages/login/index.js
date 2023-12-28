import React, {useState} from 'react';
import Grid from "@mui/material/Grid";
import SimpleReactValidator from "simple-react-validator";
import {toast} from "react-toastify";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useRouter } from 'next/router'
import Link from "next/link";


const LoginPage = (props) => {

    const router = useRouter()


    const [value, setValue] = useState({
        email: 'user@gmail.com',
        password: '123456',
        remember: false,
    });

    const changeHandler = (e) => {
        setValue({...value, [e.target.name]: e.target.value});
        validator.showMessages();
    };

    const rememberHandler = () => {
        setValue({...value, remember: !value.remember});
    };

    const [validator] = React.useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));



    const submitForm = (e) => {
        e.preventDefault();
        if (validator.allValid()) {
            setValue({
                email: '',
                password: '',
                remember: false
            });
            validator.hideMessages();

            const userRegex = /^user+.*/gm;
            const email = value.email;

            if (email.match(userRegex)) {
                toast.success('You successfully Login on Khairah !');
                router.push('/')
            }
        } else {
            validator.showMessages();
            toast.error('Empty field is not allowed!');
        }
    };
    return (
        <Grid className="loginWrapper">
            <Grid className="loginForm">
                <h2 style={{color:"#1d5d1d",fontFamily: 'Buddy Champion',fontSize:"50px"}}>JAPNACI</h2>
                <p style={{color:"black",fontSize:"14px"}}>Pour vous connecter, veuillez saisir votre adresse email et votre mot de passe.</p>
                <form onSubmit={submitForm}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="Email"
                                value={value.email}
                                variant="outlined"
                                name="email"
                                label="Email"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                            {validator.message('email', value.email, 'required|email')}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="Mot de passe"
                                value={value.password}
                                variant="outlined"
                                name="password"
                                type="password"
                                label="Mot de passe"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                            {validator.message('password', value.password, 'required')}
                        </Grid>
                        <Grid item xs={12}>
                            {/* <Grid className="formAction">
                                <FormControlLabel
                                    control={<Checkbox checked={value.remember} onChange={rememberHandler}/>}
                                    label="Remember Me"
                                />
                                <Link href="/forgot-password">Forgot Password?</Link>
                            </Grid> */}
                            <Grid className="formFooter">
                                <Button fullWidth className="cBtnTheme" type="submit" style={{backgroundColor:"#1d5d1d",fontSize:"15px"}}>Se connecter</Button>
                            </Grid>
                          
                            <p className="noteHelp" >Vous n'avez pas de compte ? <Link href="/register" style={{color:"#1d5d1d",fontSize:"15px"}}>Créer un compte </Link>
                            </p>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    )
};

export default LoginPage;