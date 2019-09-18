import React from 'react';
import {withStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import SinglePaperView from '../../components/SinglePaperView/SinglePaperView';

const CenteredTextField = withStyles({
    root: {
        '& .MuiInputBase-root': {
            minWidth: '100%',
        },
        display: 'flex',
        alignItems: 'center',
        marginTop: '2vh',
    },
})((props) => {
    return (
        <TextField {...props}>{props.children}</TextField>
    );
});

const SignInButton = withStyles({
    root: {
        minWidth: '100%',
        marginTop: '4vh',
    },
})((props) => {
    return (
        <Button classes={props.classes} variant="contained">Sign in</Button>
    );
});

class LoginComponent extends React.Component {
    render() {
        return (
            <SinglePaperView>
                <Typography align="center" variant="h1">LOGO</Typography>
                <form>
                    <Grid container justify="center" alignItems="center">
                        <Grid xs={8}>
                            <CenteredTextField label="Login"/>
                        </Grid>
                        <Grid xs={8}>
                            <CenteredTextField label="Password"/>
                        </Grid>
                        <Grid xs={8}>
                            <SignInButton/>
                        </Grid>
                    </Grid>
                </form>
            </SinglePaperView>
        );
    }
}

export default LoginComponent;