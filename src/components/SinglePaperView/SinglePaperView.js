import React from 'react';
import {withStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Logo from '../logo/Logo';


const ContainerGrid = withStyles({
    root: {
        minHeight: '100vh',
    },
})((props) => {
    return (
        <Grid classes={props.classes} container justify="center" alignItems="center">
            {props.children}
        </Grid>
    );
});

const StyledPaper = withStyles({
    root: {
        paddingTop: '4vh',
        paddingBottom: '4vh',
    },
})((props) => {
    return (
        <Paper classes={props.classes}>
            {props.children}
        </Paper>
    );
});


class SinglePaperView extends React.Component {
    render() {
        return (
            <ContainerGrid>
                <Grid item xs={4}>
                    <StyledPaper>
                        <Logo/>
                        {this.props.children}
                    </StyledPaper>
                </Grid>
            </ContainerGrid>
        );
    }

}

export default SinglePaperView;