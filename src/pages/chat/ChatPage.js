import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {withStyles} from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';

import logo from '../../images/logo.png';
import theme from '../../theme'


const ChatBar = withStyles({
    rootAAA: {
        zIndex: theme.zIndex.drawer + 1,
    },
    img: {
        width: '140px',
        height: '67px',
    }
})((props) => {
    return (
        <AppBar className={props.classes.rootAAA} color="secondary">
            <Toolbar><CardMedia className={props.classes.img} image={logo}/></Toolbar>
            {props.children}
        </AppBar>
    );
});


const ChatDrawer = withStyles({
    paper: {
        background: theme.palette.secondary.light,
        paddingTop: '70px',
    }
})((props) => {
    return (
        <Drawer classes={{paper: props.classes.paper}} variant="permanent">
            {props.children}
        </Drawer>
    );
});

const MessageGrid = withStyles({
    root: {
        marginTop: '80px'
    },
})((props) => {
    return (
        <Grid classes={props.classes} container justify="center" alignItems="center">
            {props.children}
        </Grid>
    );
});


class ChatPage extends React.Component {
    render() {
        return (
            <div>
                <ChatBar/>
                <ChatDrawer>
                    <List>
                        <ListItem button>
                            <ListItemText primary="Logout"/>
                        </ListItem>
                    </List>
                </ChatDrawer>
                <MessageGrid>
                    <Grid xs={10}>
                    <Paper>
                        text123
                    </Paper>
                    </Grid>
                </MessageGrid>
            </div>
        );
    }
}

export default ChatPage;