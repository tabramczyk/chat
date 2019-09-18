import {createMuiTheme} from '@material-ui/core/styles';

const customTheme = {
    palette: {
        primary: {
            main: '#FF0e00',
        },
        secondary: {
            light: '#555555',
            main: '#333333',
            dark: '#111111',
        },
        text: {
            primary: '#FFFFFF',
            secondary: '#FFFFFF',
        },
        background: {
            paper: '#333333',
            default: '#000000',
        },
    },
};

customTheme.overrides = {
    MuiButton: {
        contained: {
            backgroundColor: customTheme.palette.secondary.dark,
            color: customTheme.palette.primary.main,
            '&:hover': {
                backgroundColor: customTheme.palette.secondary.light,
            },
        },
    },
};

const theme = createMuiTheme(customTheme);

export default theme;