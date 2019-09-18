import React from 'react';
import {withStyles} from '@material-ui/core/styles'
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

const SignUpButton = withStyles({
    root: {
        minWidth: '100%',
        marginTop: '4vh',
    },
})((props) => {
    return (
        <Button classes={props.classes} variant="contained">Sign up</Button>
    );
});

class RegisterComponent extends React.Component {
    render() {
        return (
            <SinglePaperView>
                <form>
                    <Grid container justify="center" alignItems="center">
                        <Grid xs={8}>
                            <CenteredTextField label="Login"/>
                        </Grid>
                        <Grid xs={8}>
                            <CenteredTextField type="password" label="Password"/>
                        </Grid>
                        <Grid xs={8}>
                            <CenteredTextField type="password" label="Confirm password"/>
                        </Grid>
                        <Grid xs={8}>
                            <SignUpButton/>
                        </Grid>
                    </Grid>
                </form>
            </SinglePaperView>
        );
    }
}

export default RegisterComponent;