import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
const customizedTheme = createTheme({
    palette: {
        background: {
            default: '#2B2B2A', // Replace with the grey shade you prefer
        },
    },
});


// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn(props) {
    const [username,setusername]=React.useState("")
    const [pwd,setpwd]=React.useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({username,pwd})
        axios.post("http://localhost:5000/api/login",{"email":username,"password":pwd}).then((result)=>{

            console.log(result.data,"the response");
            if(result.data==="success"){
                props.chanV("HomeAdmin")
                props.setlogged(true)                  
            }else{
                alert(result.data)
            }
      
        })
    }

    return (
        <ThemeProvider theme={customizedTheme}>
            <Container component="main" maxWidth="xs">
                
                 
            <div className="svg-container" style={{display:"inline"}}>
                 <svg
                        version="1.1"
                        id="layer"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 623.6 57.6"
                        style={{ enableBackground: 'new 0 0 623.6 57.6', width: '500px' ,marginBottom :"50px" ,color :"gold",marginTop:"10px"} }
                        xmlSpace="preserve"
                    >

                        <path d="M147.3,44L126.9,0.1H111v1.5c2.3,0,4,0.3,5,0.8s1.7,1.2,2.1,2c0.6,1.1,0.8,2.9,0.8,5.4v36.7c0,3.1-0.3,5.2-0.9,6
	c-1,1.4-2.7,2.2-5.1,2.2h-2v1.5h19.6v-1.5h-2c-2.2,0-3.8-0.6-4.8-1.7c-0.7-0.9-1.1-3-1.1-6.5V9l21.7,47.2h1.4L167.3,9v37.5
	c0,3.1-0.3,5.2-0.9,6c-1,1.4-2.7,2.2-5.1,2.2h-2v1.5h23.8v-1.5h-1.9c-2.2,0-3.8-0.6-4.8-1.7c-0.8-0.9-1.2-3-1.2-6.5V9.8
	c0-3.1,0.3-5.2,0.9-6c1-1.4,2.7-2.2,5.1-2.2h1.9V0.1h-15.9L147.3,44z"></path><path d="M206.2,36.9l8.6-20l8.4,20H206.2z M234.7,46.8L217.5,5.6h-1.3l-17.4,40.8c-1.5,3.6-2.9,6-4.1,7.1c-0.6,0.6-1.9,1.1-4,1.4
	v1.4h15.6v-1.4c-2.4-0.2-3.9-0.5-4.7-1.1c-0.7-0.6-1.1-1.2-1.1-2c0-0.9,0.4-2.4,1.2-4.3l3.4-7.8h19.2l3,7.1c1,2.3,1.5,4,1.5,5.1
	c0,0.8-0.3,1.5-1,2c-0.7,0.6-2,0.9-4,1v1.4h19.5v-1.4c-2-0.1-3.6-0.7-4.7-1.7C237.4,52.2,236.1,50.1,234.7,46.8"></path><path d="M284.3,8.1h1.7c1.9,0,3.4,0.5,4.3,1.5c0.7,0.8,1,2.7,1,5.7v28.6L261,6.8h-13.4v1.4c1.4,0,2.5,0.1,3.2,0.3
	c1.4,0.5,2.5,1,3.3,1.5c0.7,0.5,1.8,1.6,3.3,3.3v34.4c0,2.8-0.3,4.6-0.8,5.3c-0.9,1.3-2.4,1.9-4.5,1.9h-1.7v1.4h17.1v-1.4h-1.8
	c-1.9,0-3.3-0.5-4.3-1.5c-0.7-0.8-1-2.7-1-5.7V17.2L293,57.1h1.3V15.4c0-2.8,0.3-4.6,0.8-5.3c0.9-1.3,2.4-1.9,4.5-1.9h1.8V6.8h-17.2
	v1.3H284.3z"></path><path d="M336.4,33.2c-1.7-1.3-4.9-3.2-9.5-5.7c-5.7-3-9.3-5.5-10.8-7.3c-1-1.2-1.6-2.6-1.6-4.1c0-2,0.8-3.7,2.5-5.3
	c1.7-1.5,3.7-2.3,6.3-2.3c2.2,0,4.4,0.6,6.5,1.7s3.7,2.7,4.8,4.6c1.1,1.9,1.9,4.6,2.4,7.9h1.4V5.6H337c-0.2,1.1-0.6,1.9-1,2.3
	s-0.9,0.6-1.6,0.6c-0.6,0-1.5-0.3-2.9-0.9c-2.9-1.3-5.7-1.9-8.4-1.9c-4.2,0-7.7,1.3-10.4,3.9c-2.7,2.6-4.1,5.6-4.1,9.2
	c0,2,0.5,3.9,1.4,5.6s2.3,3.3,4.1,4.7c1.8,1.4,4.8,3.3,9,5.7c4.2,2.4,6.8,3.9,7.8,4.7c1.4,1.1,2.5,2.2,3.1,3.5c0.7,1.2,1,2.5,1,3.7
	c0,2.2-0.9,4.1-2.6,5.7c-1.8,1.6-4.2,2.4-7.2,2.4c-2.6,0-5-0.6-7.2-1.8c-2.2-1.2-3.8-2.6-4.9-4.4s-1.9-4.4-2.6-8h-1.4v17h1.4
	c0.2-1.1,0.4-1.9,0.8-2.3s0.8-0.5,1.4-0.5s2.1,0.4,4.5,1.2c2.4,0.8,3.9,1.2,4.7,1.3c1.3,0.2,2.6,0.3,4.1,0.3c4.6,0,8.3-1.4,11.2-4.1
	c2.9-2.7,4.4-5.9,4.4-9.7c0-2-0.5-3.9-1.4-5.7C339.4,36.1,338.1,34.6,336.4,33.2"></path><path d="M385.4,49.3c-3,3.6-6.9,5.4-11.5,5.4c-4.4,0-7.9-1.7-10.5-5c-3.5-4.4-5.2-10.6-5.2-18.7c0-7.9,1.7-13.9,5-18
	c2.7-3.3,6.2-4.9,10.7-4.9c4.7,0,8.4,1.7,11.1,5c3.3,4.2,5,10.5,5,19C389.9,40,388.4,45.7,385.4,49.3 M374.5,5.6
	c-6.5,0-12,2.2-16.7,6.5c-5.4,5-8,11.4-8,19.2c0,7.7,2.3,14,7,18.8c4.6,4.8,10.4,7.3,17.2,7.3c6.7,0,12.5-2.5,17.2-7.5
	s7.1-11.2,7.1-18.7c0-7.3-2.4-13.4-7.1-18.3S380.9,5.6,374.5,5.6"></path><path d="M421.2,30.8c-0.2,0-0.5,0-0.8,0s-0.7,0-1.2,0V10.2c2.4-0.5,4.3-0.7,5.7-0.7c3.2,0,5.8,1,7.7,2.9c1.9,1.9,2.9,4.4,2.9,7.5
	c0,3.2-1.2,5.8-3.6,7.8C429.5,29.8,425.9,30.8,421.2,30.8 M441.7,46.3l-10.2-14.2c4.2-0.9,7.2-2.5,9.2-4.7s3-4.9,3-7.9
	c0-2.8-0.9-5.3-2.6-7.4s-3.9-3.5-6.4-4.2c-2.5-0.8-6.4-1.2-11.6-1.2h-18v1.4h1.9c1.9,0,3.3,0.5,4.2,1.6c0.7,0.8,1,2.7,1,5.8v32
	c0,2.8-0.3,4.6-0.8,5.4c-0.9,1.4-2.4,2-4.5,2H405v1.4h21.2v-1.4h-1.9c-1.9,0-3.2-0.5-4.2-1.6c-0.7-0.8-1-2.7-1-5.8V33.1
	c0.4,0,0.8,0,1.1,0.1c0.4,0,0.7,0,1,0c0.8,0,1.8,0,3-0.1L441,56.3h13.2v-1.4c-2.7-0.3-4.9-1-6.6-2C446.1,51.8,444.1,49.6,441.7,46.3
	"></path><path d="M493.3,1.6c1.5,0,2.6,0.2,3.4,0.5c0.7,0.3,1.3,0.8,1.7,1.4c0.4,0.6,0.6,1.3,0.6,2.1c0,1.3-0.8,3.2-2.5,5.8l-11,17.3
	l-11.7-18.1c-1.7-2.6-2.5-4.4-2.5-5.4c0-1.2,0.5-2.1,1.6-2.7s2.3-0.9,3.6-0.9h1.2V0.1h-24v1.5c1,0,1.8,0.1,2.4,0.4
	c2,1,3.4,1.8,4,2.5s1.9,2.4,3.7,5.2l15.4,23.5v13.3c0,3.1-0.3,5.2-0.9,6c-1,1.4-2.7,2.2-5,2.2h-2v1.5h23.8v-1.5h-1.8
	c-2.3,0-3.9-0.6-5-1.7c-0.8-0.9-1.2-3-1.2-6.5V32.4l13.5-21.3c1.7-2.7,3-4.6,4.2-5.8c1.1-1.2,2.4-2.1,3.8-2.7c1.4-0.6,2.4-1,3.1-1
	h1.1V0.1h-19.6v1.5H493.3z"></path><rect x="53.3" y="48.8" width="35.6" height="2.3"></rect><rect x="35.7" y="31.8" width="53.1" height="2.3"></rect><rect x="18.4" y="15.9" width="70.4" height="2.3"></rect><rect width="88.8" height="2.3"></rect><rect x="534.8" y="48.8" width="35.6" height="2.3"></rect><rect x="534.8" y="31.8" width="53.1" height="2.3"></rect><rect x="534.8" y="15.9" width="70.4" height="2.3"></rect><rect x="534.8" width="88.8" height="2.3"></rect></svg>







                 </div>
                <CssBaseline />
                <Box sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: 'grey', // Change this to the shade of grey you prefer
                padding: '20px', // Adding padding for better spacing
                borderRadius: '10px', // Adding border radius for a rounded appearance
              }}
                   
                > 
                

                      

                  


                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={(e)=>handleSubmit(e)} noValidate sx={{ mt: 1  }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            type="email"
                            onChange={(e)=>{setusername(e.target.value)}}
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
                            onChange={(e)=>{setpwd(e.target.value)}}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, color: "black" }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>

                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}