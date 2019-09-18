import {createMuiTheme} from '@material-ui/core/styles';

const customTheme = {
    palette: {
        primary: {
            main: '#AA0000',
            dark: '#FFFFFFF',
        },
        secondary: {
          main: '#333333',
            dark: '#111111'
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
        },
    },
};

const theme = createMuiTheme(customTheme);

export default theme;