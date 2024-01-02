import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {Alert, Divider} from "@mui/material";
import {LoginData} from "../../utils/types";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {useNavigate} from "react-router-dom";
import {setNavValue} from "../../features/navValueSlice";
import {indexOfNavElement} from "../../utils/utilsFunctions";

function Copyright(props: any)
{
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://www.tel-ran.com/">
                Tel-Ran
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const defaultTheme = createTheme();

interface Props
{
    submitFn: (loginData: LoginData) => void
}
export default function LoginForm({submitFn}: Props)
{
    const dispatch = useAppDispatch();
    const code = useAppSelector(state => state.code.code);
    const routes = useAppSelector(state => state.routes.routes);
    const navigate = useNavigate();


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>
    {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        submitFn({
            email: data.get('email') as string,
            password: data.get('password') as string,
        });
    };


    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                {code !== 'OK' &&
									<Alert severity='error'>Error: {code}, sign in again</Alert>}
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item>
                                <Button onClick={()=>{
                                    navigate("/signup");
                                    dispatch(setNavValue(indexOfNavElement(routes,'signup')))}}>
                                    {"Don't have an account? Sign Up"}
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                    <Divider sx={{width: "100%", fontWeight: "bold"}}>or</Divider>
                    <Button onClick={() => submitFn({email: 'GOOGLE', password: ''})}
                            sx={{mt: 2}} fullWidth variant={'outlined'}>
                        <Avatar src={'https://img.icons8.com/color/2x/google-logo.png'}/>
                    </Button>
                </Box>
                <Copyright sx={{mt: 8, mb: 4}}/>
            </Container>
        </ThemeProvider>
    );
}