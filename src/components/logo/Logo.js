import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';

import logo from '../../images/logo.png';


const Logo = withStyles({
    root: {
        width: '140px',
        height: '67px',
        margin: 'auto',
    },
})((props => {
    return (
        <CardMedia classes={props.classes} image={logo}/>
    );
}));

export default Logo;